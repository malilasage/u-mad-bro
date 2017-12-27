//This code is just to show how we programmed the Pebble watch. It normally lives in the CloudPebble IDE.

var Settings = require('settings');
var UI = require('ui');
var Voice = require('ui/voice');
var ajax = require('ajax');
var confirm_preference = Settings.option('confirm');

var main = new UI.Card({
  backgroundColor: 'white',
  title: 'press select to listen'
});

main.show();

var ask = function() {
  Voice.dictate('start', confirm_preference, function(e) {
    if(e.err) {
      console.log('Error: ' + e.err);
      return;
    }
    else {
      ajax({
        url: 'https://speech2color.herokuapp.com/color/' + encodeURI(e.transcription)
      }, function(data, status, req) {
        main.title('');
        main.backgroundColor(data);
      }, function(err, status, req) {
        console.log(err);
      });
      console.log(e.transcription);
      return;
    }
  });
};

main.on('click', 'select', function(e) {
    ask();
});
