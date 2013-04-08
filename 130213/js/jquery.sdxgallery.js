;(function($){
$.fn.slide = function(option) {
		   var settings = $.extend({
					slideImg: null,
					galleryThum: null,
					thum: null,
					btn: null,
					btnClose: null,
					btnNext: null,
					btnPrev: null
		}, option);

		var slide = $(this);
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		var liLength = $(settings.slideImg).length;
		var innerWidth = $(window).width();
		var innerHeight = $(window).height();
		var ulWidth = liLength*innerWidth

		$("section").css("width", "innerWidth + px").css("overflow", "hidden");
		$("img").css("max-width",(innerWidth-100) + "px");

		// ナンバリング用画像初期番号
		var imageNum = 1;

		// 画像ナンバリング
		$(slide).find("li").each(function(){
			var detaNum = imageNum++;
			$(this).attr("deta-img",detaNum);
			if ($(this).is("li:last-child img")){
			return this;
			}
		});


		// 大画像のデータからサムネイル表示
		var thumDate = $(slide).html();
		$(settings.galleryThum).html(thumDate);

		// サムネイルの画像表示切り替え
		$(settings.thum).live("click", function(){
			var liNum = $(this).attr("deta-img");
			$(slide).css("margin-left", (-innerWidth * liNum + innerWidth) + "px");
			$(slide).show();
			$(settings.btn).show();
		});
		$(slide).width(ulWidth);
		$(settings.slideImg).width(innerWidth);

		var btnHeight = $(settings.btnClose).css("height");
		$(settings.slideImg).height(innerHeight-parseInt(btnHeight));
		$(this).height(innerHeight-parseInt(btnHeight));
		$("section").height(innerHeight);


//画像周辺クリック時のボタン表示非表示
var showHide = 0;
function displayTo(showHide){
		$(settings.btn).toggle();
}

$(settings.slideImg).click(function(){
	displayTo(showHide);
	return false;
});

$("ul.gallery-list li img").click(function(){
	displayTo(showHide);
	return false;
});




	// ボタンクリック時 //
	function moveTo(direction){
		var nowLeft = $(slide).css("margin-left");
		var liWidth = $(slide).css("width");

		if (direction == 1) {
			var plusMinus = "-";
		} else if (direction == 2) {
			var plusMinus = "+";
		} else {
		}

		if (direction == 1) {
			if (parseInt(nowLeft) >= 0){
			} else {
			var liWidth = $(settings.slideImg).width();
			var nowLeft = $(slide).css("margin-left");
			var nextDistance = plusMinus+liWidth
			$(slide).css("margin-left", (parseInt(nowLeft)-nextDistance) + "px");
			}
		} else if (direction == 2) {
			if (parseInt(nowLeft) <= -ulWidth+innerWidth){
			} else {
			var liWidth = $(settings.slideImg).width();
			var nowLeft = $(slide).css("margin-left");
			var nextDistance = plusMinus+liWidth
			$(slide).css("margin-left", (parseInt(nowLeft)-nextDistance) + "px");
			}
		} else if (direction == 3) {
			$(slide).css("display", "none");
			$(settings.btn).css("display", "none");
		}
	}

		$(settings.btnPrev).click(function(){
			var direction = 1;
			moveTo(direction);
			return false;
		});

		$(settings.btnNext).click(function(){
			var direction = 2;
			moveTo(direction);
			return false;
		});

		$(settings.btnClose).click(function(){
			var direction = 3;
			moveTo(direction);
			return false;
		});


/////////touch start

/* タッチの開始時のイベント */
/* タッチできる環境なら true、そうでないなら false 。
ここで先に判別しておきます。 */
var isTouch = ('ontouchstart' in window);

/* slide のイベントを jQuery.bind で捕獲します。 */
$(slide).bind({

/* タッチの開始、マウスボタンを押したとき */
'touchstart mousedown': function(e) {
// ページが動いたり、反応を止める
e.preventDefault();

// 開始位置 X,Y 座標を覚えておく
// （touchmove イベントを通らず終了したときのために必ず覚えておくこと）
this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);

// 現在の slide の場所を覚えておく
this.left = $(this).position().left;

// タッチ処理を開始したフラグをたてる
this.touched = true;
},
/* タッチしながら移動、マウスのドラッグ */
'touchmove mousemove': function(e) {

// 開始していない場合は動かないようにする
// 過剰動作の防止
if (!this.touched) {
return;
}

// ページが動くのを止める
e.preventDefault();

// 移動先の slide の位置を取得する
this.left = this.left - (this.pageX - (isTouch ? event.changedTouches[0].pageX : e.pageX) );

// slide を移動させる
$(this).css({left:this.left, top:this.top});

// 位置 X,Y 座標を覚えておく
this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
},
/* タッチの終了、マウスのドラッグの終了 */
'touchend mouseup': function(e) {
if (!this.touched) {
return;
}

// タッチ処理は終了したため、フラグをたたむ
this.touched = false;

// 必要なら以下で最終の slide の位置を取得し何かに使う
// this.pageX
// this.pageY
}
});

/////////touch end

		return this;
};
})(jQuery);