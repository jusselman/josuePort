

// mobile slide nav menu //
function openSlideMenu(){
  document.getElementById('side-menu').style.width = '100%';
  // document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
  // document.getElementById('main').style.marginLeft = '0';
}

// navbar change color on scroll //
// window.onscroll = function() {scrollFunction()};
//
//
//
// function scrollFunction() {
//   if (document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.background = "#fff";
//     document.getElementById("navLi").style.color = "#000";
//
//   } else {
//     document.getElementById("navbar").style.background = "rgba(0,0,0,0)";
//     document.getElementById("navLi").style.color = "fff";
//   }
// }
// $(function () {
//   $(document).scroll(function () {
// 	  var $nav = $(".navbar-fixed-top");
// 	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
// 	});
// });

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

// Cache selectors
var lastId,
 topMenu = $("#mainNav"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "\\#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=\\#"+id+"]").parent().addClass("active");
   }
});
