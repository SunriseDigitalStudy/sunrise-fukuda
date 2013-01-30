;(function($){
$.fn.shutter = function(option) {
		   var settings = $.extend({
					menu: null,
					closeBtn: null,
					mainBody:null
	       }, option);

	var opnBtn = $(this);
	var visible = document.getElementById("close-btn");
	var screenHeight = screen.height;
console.log(screenHeight)
		$(settings.menu).css("top", screenHeight);


		


		$(opnBtn).click(function(){
			$(settings.menu).css("display","block");
			$(settings.menu).not(":animated").animate({top: "0px"},
				{duration:"slow",
					complete:function(){
						}}
			);
		});

		$(settings.closeBtn).click(function(){
			$(settings.menu).not(":animated").animate({top: (screenHeight) + "px"},
				{duration:"slow",
					complete:function(){
						$(settings.menu).css("display","none");
						}}
			);
		});



	return this;
};
})(jQuery);