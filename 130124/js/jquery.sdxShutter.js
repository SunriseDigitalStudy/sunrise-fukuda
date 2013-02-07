;(function($){
$.fn.shutter = function(option) {
		   var settings = $.extend({
					menu: null,
					closeBtn: null,
					mainBody:null
	       }, option);

		var opnBtn = $(this);
		var screenHeight = screen.height;
		var screenWidth = $(settings.mainBody).width();		//
		var paddingL = $(settings.menu).css("padding-left");
		var paddingR = $(settings.menu).css("padding-right");
		var menuWidth = screenWidth-parseInt(paddingL)-parseInt(paddingR);
		$(settings.menu).css("top", screenHeight);
		$(settings.menu).css("width", menuWidth);

		$(opnBtn).click(function(){
			var displayCondition = $(settings.menu).css("display");
			$(settings.menu).addClass("aaa")
			if ((settings.menu).css("display") == "block"){$(settings.menu).css("top", 0)}
		});

		$(settings.closeBtn).click(function(){
			$(settings.menu).css("top", (screenHeight))
			$(settings.menu).bind("webkitTransitionEnd",function(){
			if ((settings.menu).css("top") == screenHeight + "px"){
				$(settings.menu).removeClass("aaa")
			}
			});
		});

/*
		function risingTo(openClose){
			   		// ���E�ƃT���l�N���b�N�ł̓��씻��
					if (openClose == 0){
			var displayCondition = $(settings.menu).css("display");
			$(settings.menu).addClass("aaa")
			if ((settings.menu).css("display") == "block"){$(settings.menu).css("top", 0)}
					} else if(openClose == 1){
			$(settings.menu).css("top", (screenHeight))
			$(settings.menu).bind("webkitTransitionEnd",function(){
			if ((settings.menu).css("top") == screenHeight + "px"){
				$(settings.menu).removeClass("aaa")
			}
					} 

		// opn�N���b�N
		$(settings.opnBtn).click(function(){
			var openClose = 0
			risingTo(openClose)
			return false;
		});

		// close�N���b�N
		$(settings.closeBtn).click(function(){
			var openClose = 1
			risingTo(openClose)
			return false;
		});

*/
	return this;
};
})(jQuery);