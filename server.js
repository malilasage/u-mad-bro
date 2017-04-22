var express = require('express');
var app = express();
var port = process.env.PORT || 4000;

// var allowCrossDomain = function(req, res, next) {
//     // res.header('Access-Control-Allow-Origin', "http://localhost");
//     // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     // res.header('Access-Control-Allow-Headers', 'Content-Type');
//     req.header('Access-Control-Allow-Origin', '*');
// };

// app.use(allowCrossDomain);

// app.use(express.static('public'));

app.get('/api', function(req, res) {
  res.send('cool');
})

app.listen(port, function() {
  console.log('listening on port ' + port);
})
