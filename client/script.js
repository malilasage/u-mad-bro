$(function() {

  // $('#btn').on('click', () => {
  //   $.get('/emotion', (data, status) => {
  //     if (status != 'success') {
  //       console.log('error');
  //     }
  //     else {
  //       color.css('background-color', data);
  //     }
  //   })
  // })

  //header animation
  var options = {
    separator: '|',
    animation: 'flipInX',
    interval: 3000
  };

  $('#span1').cycleText(options);
})

// var color = $('.color-box');
//
// color.on('click', (event) => {
//   classes = $(event.target).attr('class');
//   classes = classes.slice(10)
//
//   $(event.target).css({
//     'transform'
//   })
// });
