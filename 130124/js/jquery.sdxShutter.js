;(function($){
$.fn.shutter = function(option) {
		   var settings = $.extend({
					menu: null,
					closeBtn: null
	       }, option);

	var opnBtn = $(this);

	$(opnBtn).click(function(){
		$(settings.menu).css("display","block");

	});
	$(settings.closeBtn).click(function(){
		$(settings.menu).css("display","none");

	});



	return this;
};
})(jQuery);