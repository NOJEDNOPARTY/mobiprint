var common = {
	init: function() {
		common.main();
	},
	main: function() {

		$('.gallery-owl').owlCarousel({
			nav: true,
			loop: true,
			smartSpeed: 1000,
			margin: 10,
			responsive:{
				320:{
					items:2
				},
				1024: {
					items:3
				}
			}
		});

		$('.phone-mask').mask("+380(99)999-99-99");

		$('.need-help').click(function(event){
			event.preventDefault();
			$('.popup-wrapper').removeClass('active');
			$('#needHelpPopup').addClass('active');
		});

		$('.popup-close').click(function(){
			$('.popup-wrapper').removeClass('active');
		});

		$('.choose-btn').click(function(event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});

		$('.show-more-btn').click(function(e) {
            
            e.preventDefault();

            $('.product-items').toggleClass('more');
            
            if($('.product-items').hasClass('more')) {
                $('.show-more-btn').text('ПОКАЗАТЬ МЕНЬШЕ');
            }else {
                $('.show-more-btn').text('ПОКАЗАТЬ ЕЩЕ');
            }
        });
		$('.btn-create').click(function(e) {
            e.preventDefault();
            $('.main-container-wrap').addClass('active');
        });
		$('.main-container-wrap .popup-close').click(function() {
            $('.main-container-wrap').removeClass('active');
        });
        

	}
};

(function() {
	common.init();
}());
