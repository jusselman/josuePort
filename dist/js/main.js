

// mobile slide nav menu //
function openSlideMenu(){
  document.getElementById('side-menu').style.width = '100%';
  // document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
  // document.getElementById('main').style.marginLeft = '0';
}


jQuery(document).ready(function($){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 85) {
			// $('.navbar').css("backgroundColor","rbga(0,0,0,0)");
      $('.navbar li').css("color","#000");
      $('.navbar li a').css("color","#000");
      $('.navbar').css("background-color","#fff");
      $('.hamburger div').css("background-color","#000");
      $('.hamburger').css("border","2px solid #000");


    } else {
			$('.navbar li').css("color","#fff");
      $('.navbar li a').css("color","#fff");
      $('.navbar').css("background-color","rgba(0,0,0,0)");
      $('.hamburger div').css("background-color","#fff");
      $('.hamburger').css("border","2px solid #fff");




		}
	});
});


// SMOOTH SCROLLING JQUERY //

$(document).ready(function() {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1250 );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().addClass('active::before');
        $(this).parent().siblings().removeClass('active');
        $(this).parent().siblings().removeClass('active::before');
      }
    })
  })
})


// SCROLL REVEAL //
if (window.innerWidth > 769) {
 window.sr = ScrollReveal();
  sr.reveal('.fadeInTop', {
    duration: 2500,
    origin: 'top',
    distance: '200px'
  });
  sr.reveal('.fadeInBottom', {
    duration: 2500,
    origin: 'bottom',
    distance: '200px'
  });
  sr.reveal('.fadeInBottomLight', {
    duration: 3500,
    origin: 'bottom',
    distance: '100px'
  });
  // sr.reveal('.fadeInHere', {
  //   duration: 2500,
  //   origin: 'bottom',
  //   distance: '5px'
  // });
};

// $('#profession').hide().fadeIn('slow');


// PROFESSION FADER //

var faded_i = 0;
var faded_array = ["Web Developer", "UI/UX Designer", "Photographer", "Epicurean"];
var faded_elem;
faded_elem = document.getElementById('faded'); fadedSlide();
function fadedNext() {
  faded_i++;
  faded_elem.style.opacity = 0;
  if(faded_i > (faded_array.length - 1)) {
    faded_i = 0;
  }
  setTimeout('fadedSlide()', 1500)
}
function fadedSlide() {
  faded_elem.innerHTML = faded_array[faded_i];
  faded_elem.style.opacity = 1;
  setTimeout('fadedNext()',6000);
}
