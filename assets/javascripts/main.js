$(document).ready(function(){
	
	sectionScrollPage();

	setTimeout(function(){
		$('#scrollto-section-1').find('figcaption').addClass('active');
	},900);
	

	// FOR ACCORDION
	$('.panel-heading a').click(function() {
   	$('.panel-heading').removeClass('active');
    $(this).parents('.panel-heading').addClass('active');
 	});

	//Position of scrollbullets
 	setTimeout(function(){
		var myMarginLeft = $('.container-fluid').offset().left;
 		$('.aside-container').css({'right': myMarginLeft});
	},10);

	//For location image changes
	$('[data-location]').on('click', function(){
		var value1 = $(this).attr('data-location');
		$('.location-img').removeClass('active');
		$('.location-img[data-image='+value1+']').addClass('active');
	})

	// FOR MOUSE-SCROLL
	$(".cu-content_logo .mouse_circle").click(function() {
		$('html, body').animate({ 
			scrollTop: $('.main-banner').offset().top}, 800);
	});

	//Pralallax image scroll Animation
	
	if (window.matchMedia('(min-width: 767px)').matches) {
			$(function() {
				$.stellar({
					horizontalScrolling : true,
					verticalOffset : 0
				});
			});
		}

	//section - parallax scroll starts
	$('body').sectionScroll({
		easing : 'easeInOutQuart',
		scrollDuration : 1200
	});

	//section - parallax scroll ends


	//slick.js
	$(window).resize(function() {
		if (window.matchMedia('(max-width: 767px)').matches) {
			mobileSlider();
		}

		//Position of scrollbullets on resize
		setTimeout(function(){
			var myMarginLeft = $('.container-fluid').offset().left;
		 	// console.log(myMarginLeft);
	 		$('.aside-container').css({'right': myMarginLeft});
		},10);

	});

	$(window).load(function() {
		if (window.matchMedia('(max-width: 767px)').matches) {
			mobileSlider();
		}
	});

	function mobileSlider() {
		$(".cu-view-profiles").not('.slick-initialized').slick({					
			arrows : false,
			dots : false,
			infinite : true,
			speed : 350,
			slidesToShow : 1,
			slidesToScroll : 1,
			centerMode : true,
			centerPadding : '40px',
			variableWidth : true,	
			loop : true,
			cssEase : 'cubic-bezier(0.25, 0.1, 0.24, 1.26)',
			autoplay : false,
			responsive : [{
				breakpoint : 768,
				settings : {
					slidesToShow : 1,
					slidesToScroll : 1
				}
			}, {
				breakpoint : 3000,
				settings : "unslick"
			}]

		});
	}

})

$(window).scroll(function() {
	sectionScrollPage();
});

function sectionScrollPage(){
		var sectionActive = $('.scrollable-section.active-section').attr('id');
		$('body').attr("class", "");
		$('body').attr("class", sectionActive);
}

// // Add class when element scrolled into the viewport.
// function isElementInViewport(elem) {
//     var $elem = $('.cu-disruptors');

//     // Get the scroll position of the page.
//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     // Get the position of the element on the page.
//     var elemTop = Math.round( $elem.offset().top );
//     var elemBottom = elemTop + $elem.height();

//     return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
// }

// // Check if it's time to start the animation.
// function checkAnimation() {
//     var $elem = $('#forManagement');

//     if (isElementInViewport($elem)) {
//         // Start the animation
//         $elem.addClass('active');
//     } else {
//         $elem.removeClass('active');
//     }
// }

// // Capture scroll events
// $(window).scroll(function(){
//     checkAnimation();
// });


// $(document).ready(function () {
//     var viewport = $(window),
//         setVisible = function (e) {
//             var viewportTop = viewport.scrollTop(),
//                 viewportBottom = viewport.scrollTop() + viewport.height();
//             //$('.cu-disruptors .tab-content').each(function () {
//                 var self = $('#forManagement .nav-profile-categories'),
//                     top = self.offset().top,
//                     bottom = top + self.height(),
//                     topOnScreen = top >= viewportTop && top <= viewportBottom,
//                     bottomOnScreen = bottom >= viewportTop && bottom <= viewportBottom,
//                     elemVisible = topOnScreen || bottomOnScreen;
//                 self.toggleClass('visible', elemVisible);
//             //});
//         };
//     viewport.scroll(setVisible);
//     setVisible();
// });