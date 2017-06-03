

$(document).ready(function(){

	

	if (window.matchMedia('(max-width: 768px)').matches)
		{
			var stickyTop = $('.orange-tabs').offset().top;
		}
	else 
		{
			var stickyTop = $('.orange-tabs').offset().top - 50;
		}


	if (window.matchMedia('(max-width: 768px)').matches)
		{
			var stickyBelowSection = $('#scrollto-section-4').offset().top- 100;
		}
	else 
		{
			var stickyBelowSection = $('#scrollto-section-4').offset().top - 100;
		}

	
	// console.log(stickyHeight);
	$(window).on( 'scroll', function(){

			if ( ($(window).scrollTop() >= stickyTop) && ($(window).scrollTop() <= stickyBelowSection)  ) {
				$('.orange-tabs').css({position: "fixed", top: "0px"}).animate("slow");
			} else {
				$('.orange-tabs').css({position: "relative", top: "0px"}).animate("slow");
			}
		});

});