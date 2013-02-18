;(function($){
$.fn.slide = function(option) {
		   var settings = $.extend({
					slideImg: null,
	       }, option);

		var slide = $(this);
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		var liNum = $("ul.gallery-list li").length;
		var ulWidth = liNum*screenWidth
		var innerWidth =$(window).width();
		var innerHeight =$(window).height();
		$(slide).width(ulWidth);
		$(settings.slideImg).width(innerWidth);
		$(".gallery").height(innerHeight)
	

/////////touch start

/* タッチの開始時のイベント */
/* タッチできる環境なら true、そうでないなら false 。
ここで先に判別しておきます。 */
var isTouch = ('ontouchstart' in window);

/* hoge のイベントを jQuery.bind で捕獲します。 */
$(slide).bind({

/* タッチの開始、マウスボタンを押したとき */
'touchstart mousedown': function(e) {
// ページが動いたり、反応を止める
e.preventDefault();

// 開始位置 X,Y 座標を覚えておく
// （touchmove イベントを通らず終了したときのために必ず覚えておくこと）
this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);

// 現在の hoge の場所を覚えておく
this.left = $(this).position().left;
this.top = $(this).position().top;

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

// 移動先の hoge の位置を取得する
this.left = this.left - (this.pageX - (isTouch ? event.changedTouches[0].pageX : e.pageX) );
this.top = this.top - (this.pageY - (isTouch ? event.changedTouches[0].pageY : e.pageY) );

// hoge を移動させる
$(this).css({left:this.left, top:this.top});

// 位置 X,Y 座標を覚えておく
this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);
},
/* タッチの終了、マウスのドラッグの終了 */
'touchend mouseup': function(e) {
if (!this.touched) {
return;
}

// タッチ処理は終了したため、フラグをたたむ
this.touched = false;

// 必要なら以下で最終の hoge の位置を取得し何かに使う
// this.pageX
// this.pageY
}
});

/////////touch end

		return this;
};
})(jQuery);