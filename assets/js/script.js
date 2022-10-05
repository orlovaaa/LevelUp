
$(document).ready(function () {
  $('.reviews__carousel').owlCarousel({
    loop: true,
    center: true,
    items: 2,
    nav: false,
    dots: false,
  
    responsive: {
      240: {
        items: 1
      },
      600: {
        items: 3
      }
    }
  });
});


function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

jQuery(function ($) {
  var fiveMinutes = 60 * 30,
      display = $('#time');
  startTimer(fiveMinutes, display);
});

function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

var menuBtn = document.querySelector('.burger-menu__btn');
var menu = document.querySelector('.burger-menu__content');
menuBtn.addEventListener('click', function () {
  menu.classList.toggle('burger-menu__active');
});

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('burger-menu__active--btn');
  menu.classList.toggle('burger-menu__active--btn');
});