$(function() {
		   var liNum = $("#bigImg li").length		   // liの数取得
		   var liWidth = $("#bigImg li").width()	   // liの幅取得
		   var ulWidth = liWidth*liNum		  		   // ulの幅取得
		   var moveLimit = ulWidth-liWidth			   // ulの移動制限距離
		   $("#bigImg").width(ulWidth);		   		   // #bigImgの幅決定
		   
		   // ナンバリング用画像初期番号
		   var imageNum = 1
		   var sumNum = 1
		   
		   //　初期の画像枚数表示
		   $("span.current").text(1);
		   $("span.total").text(liNum);
		   
		   //　初期の画像ボーダー表示
		   $("#thum li:first-child img").css("border", "1px solid #f00")
		   
			// 画像ナンバリング
			$("#bigImg li img").each(function(){
				var detaNum = imageNum++
				$(this).attr("deta-img",detaNum);
				if ($(this).is("li:last-child img")){
				return false;
				}
			});
			
			// サムネイルナンバリング
			$("#thum li img").each(function(){
				var detaNum = sumNum++
				$(this).attr("deta-img",detaNum);
				if ($(this).is("li:last-child img")){
				return false;
				}
			});
			
		   function changeTo(direction){
			   		// 左右とサムネクリックでの動作判定
					if (direction == 0){
						var plusMinus = "-=";
						var direction = 2
					} else if(direction == -1){
						var plusMinus = "+=";
						var direction = 2
					} else if(direction >= 1){
						var plusMinus = "-";
					}
					// 動作開始
					$("#bigImg:not(:animated)").animate({marginLeft: plusMinus + (direction * liWidth - liWidth) + "px"},
						   {duration:"nomal",
							complete:function(){
								//　ボタンの表示非表示
								var mLeft = $("#bigImg").css("margin-left")
								var difference = moveLimit+parseInt(mLeft)
								var nowNumber = 1+parseInt(mLeft)/-liWidth
								if (difference == 0){
								$("a#left").css("visibility","visible");
								$("a#right").css("visibility","visible");
								} else if (difference >= moveLimit) {
								$("a#left").css("visibility","hidden");
								} else if (difference >= 0){
								$("a#left").css("visibility","visible");
								}
								if (nowNumber == liNum){
								$("a#right").css("visibility","hidden");
								} else if (nowNumber < liNum) {
								$("a#right").css("visibility","visible");
								}
								//　画像枚数表示
								$("span.current").text(nowNumber);
								// ボーダー変更
								var borderNum = parseInt(mLeft) / -liWidth
								$("#thum li img").css("border", "1px solid #aaa");
								$("#thum li img").eq(borderNum).css("border", "1px solid #f00");

							}
						   });

			   }
		   
			// nextボタンクリック
			$("a#right").click(function(){
										var direction = 0
										changeTo(direction);
										return false;
				});
			
			// prevボタンクリック
			$("a#left").click(function(){
										var direction = -1
										changeTo(direction);
										return false;
				});
			
			// サムネイルクリック
			$("#thum li img").click(function(){
				var Num = $(this).attr("deta-img")
				changeTo(Num);
				return false;
			});

});