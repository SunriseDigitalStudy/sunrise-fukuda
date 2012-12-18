;(function($){
$.fn.gallery = function(option) {
		   var settings = $.extend({
					right: null,
					left: null,
					thum: null
	       }, option);
		   
		   var liNum = $(this).children("li").length;		   // liの数取得
		   var liWidth = $(this).children("li").width();	   // liの幅取得
		   var ulWidth = liWidth*liNum;		  		   // ulの幅取得
		   var moveLimit = ulWidth-liWidth;			   // ulの移動制限距離
		   $(this).width(ulWidth);		   		   // #bigImgの幅決定
		   // ナンバリング用画像初期番号
		   var imageNum = 1;
		   
		   //　初期の画像枚数表示
		   $("span.current").text(1);
		   $("span.total").text(liNum);
		   
			// 画像ナンバリング
			$(this).find("img").each(function(){
				var detaNum = imageNum++;
				$(this).attr("deta-img",detaNum);
				if ($(this).is("li:last-child img")){
				return this;
				}
			});
			
			// 大画像のデータからサムネイル表示
				var thumDate = $(this).html();
				$(settings.thum).html(thumDate);
				$(settings.thum).find("li:first-child img").addClass("select"); //初期選択状態
				if ($(this).is("li:last-child img")){
				return this;
				}
		
		function changeTo(direction){
			   		// 左右とサムネクリックでの動作判定
					if (direction == 0){
						var plusMinus = "-=";
						var direction = 2;
					} else if(direction == -1){
						var plusMinus = "+=";
						var direction = 2;
					} else if(direction >= 1){
						var plusMinus = "-";
					}
					// 動作開始
					console.log(this)
					$("#bigImg:not(:animated)").animate({marginLeft: plusMinus + (direction * liWidth - liWidth) + "px"},
						   {duration:"nomal",
							complete:function(){
								//　ボタンの表示非表示
								var mLeft = $(this).css("margin-left");
								var difference = moveLimit+parseInt(mLeft);
								var nowNumber = 1+parseInt(mLeft)/-liWidth;
								if (difference == 0){
								$(settings.left).css("visibility","visible");
								$(settings.right).css("visibility","visible");
								} else if (difference >= moveLimit) {
								$(settings.left).css("visibility","hidden");
								} else if (difference >= 0){
								$(settings.left).css("visibility","visible");
								}
								if (nowNumber == liNum){
								$(settings.right).css("visibility","hidden");
								} else if (nowNumber < liNum) {
								$(settings.right).css("visibility","visible");
								}
								//　画像枚数表示
								$("span.current").text(nowNumber);
								// ボーダー変更
								var borderNum = parseInt(mLeft) / -liWidth;
								$(settings.thum).find("li img").removeClass("select");
								$(settings.thum).find("li img").eq(borderNum).addClass("select");
							}
						   });

			   }
			// nextボタンクリック
			$(settings.right).click(function(){
										var direction = 0;
										changeTo(direction);
										return false;
				});

			// prevボタンクリック
			$(settings.left).click(function(){
										var direction = -1;
										changeTo(direction);
										return false;
				});
			
			// サムネイルクリック
			$(settings.thum).find("li img").click(function(){
				var Num = $(this).attr("deta-img");
				changeTo(Num);
				return false;
			});
	return this;
};
})(jQuery);