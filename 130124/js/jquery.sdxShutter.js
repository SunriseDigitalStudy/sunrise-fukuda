;(function($){
$.fn.shutter = function(option) {
		   var settings = $.extend({
					menu: null,
					closeBtn: null,
					mainBody:null
	       }, option);

		var opnBtn = $(this);
		var openClose = 0;
		var screenHeight = screen.height;
		$(settings.menu).css("top", screenHeight).css("height", screenHeight);

		function changeTo(openClose){
			   		// 動作判定
					if (openClose == 0){
						var displayCondition = $(settings.menu).css("display");
						$(settings.menu).addClass("displayOn")
						if ((settings.menu).css("display") == "block"){$(settings.menu).css("top", 0)}
					} else if(openClose == 1){
						$(settings.menu).css("top", (screenHeight))
						$(settings.menu).bind("webkitTransitionEnd",function(){
						if ((settings.menu).css("top") == screenHeight + "px"){$(settings.menu).removeClass("displayOn")}
						});
					}
		}

		// opnクリック
		$(opnBtn).click(function(){
			var openClose = 0;
			changeTo(openClose);
			return false;
		});

		// closeクリック
		$(settings.closeBtn).click(function(){
			var openClose = 1;
			changeTo(openClose);
			return false;
		});
		return this;
};
})(jQuery);