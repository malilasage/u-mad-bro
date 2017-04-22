$(function() {
  var color = $('#color-box');
  $('#btn').on('click', () => {
    $.get('/emotion', (data, status) => {
      if (status != 'success') {
        console.log('error');
      }
      else {
        color.css('background-color', data);
      }
    })
  })
})
