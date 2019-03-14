/*--Java Script-by-aah---------------2018--*/
jQuery(document).ready(function($){

	// OWL Carousel
	$(".owl-carousel").each(function(index, el) {
		var config = $(this).data();
		config.navText = ['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'];
		$(this).owlCarousel(config);
	});
	
	
	if( $('.basic-select2').length > 0){
		$('.basic-select2').select2();
	}
	
	
	
	
});
