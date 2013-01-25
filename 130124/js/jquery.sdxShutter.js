;(function($){
$.fn.shutter = function(option) {
		   var settings = $.extend({
					menu: null,
					closeBtn: null,
					mainBody:null
	       }, option);

	var opnBtn = $(this);

	$(opnBtn).click(function(){
		$(settings.menu).css("display","block");
		$(settings.mainBody).css("display", "none");

	});
	$(settings.closeBtn).click(function(){
		$(settings.menu).css("display","none");
		$(settings.mainBody).css("display", "block");
	});



	return this;
};
})(jQuery);