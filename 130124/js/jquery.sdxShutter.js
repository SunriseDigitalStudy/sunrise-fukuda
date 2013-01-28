;(function($){
$.fn.shutter = function(option) {
		   var settings = $.extend({
					menu: null,
					closeBtn: null,
					mainBody:null
	       }, option);

	var opnBtn = $(this);
	var visible = document.getElementById("close-btn");

	function move (x, y, r) {
		visible.style.webkitTransform = 'translate3d(' + x + 'px,' + y + 'px,0) rotate(' + r + 'deg)';
		$(opnBtn).click(function(){
			$(settings.menu).css("display","block");
			$(settings.mainBody).css("display", "none");
		});
		$(settings.closeBtn).click(function(){
			$(settings.menu).css("display","none");
			$(settings.mainBody).css("display", "block");
		});
	}



	return this;
};
})(jQuery);