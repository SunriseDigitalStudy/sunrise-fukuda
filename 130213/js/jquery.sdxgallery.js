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

		// �i���o�����O�p�摜�����ԍ�
		var imageNum = 1;

		// �摜�i���o�����O
		$(slide).find("li").each(function(){
			var detaNum = imageNum++;
			$(this).attr("deta-img",detaNum);
			if ($(this).is("li:last-child img")){
			return this;
			}
		});


		// ��摜�̃f�[�^����T���l�C���\��
		var thumDate = $(slide).html();
		$(settings.galleryThum).html(thumDate);

		// �T���l�C���̉摜�\���؂�ւ�
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


//�摜���ӃN���b�N���̃{�^���\����\��
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




	// �{�^���N���b�N�� //
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

/* �^�b�`�̊J�n���̃C�x���g */
/* �^�b�`�ł�����Ȃ� true�A�����łȂ��Ȃ� false �B
�����Ő�ɔ��ʂ��Ă����܂��B */
var isTouch = ('ontouchstart' in window);

/* slide �̃C�x���g�� jQuery.bind �ŕߊl���܂��B */
$(slide).bind({

/* �^�b�`�̊J�n�A�}�E�X�{�^�����������Ƃ� */
'touchstart mousedown': function(e) {
// �y�[�W����������A�������~�߂�
e.preventDefault();

// �J�n�ʒu X,Y ���W���o���Ă���
// �itouchmove �C�x���g��ʂ炸�I�������Ƃ��̂��߂ɕK���o���Ă������Ɓj
this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);

// ���݂� slide �̏ꏊ���o���Ă���
this.left = $(this).position().left;

// �^�b�`�������J�n�����t���O�����Ă�
this.touched = true;
},
/* �^�b�`���Ȃ���ړ��A�}�E�X�̃h���b�O */
'touchmove mousemove': function(e) {

// �J�n���Ă��Ȃ��ꍇ�͓����Ȃ��悤�ɂ���
// �ߏ蓮��̖h�~
if (!this.touched) {
return;
}

// �y�[�W�������̂��~�߂�
e.preventDefault();

// �ړ���� slide �̈ʒu���擾����
this.left = this.left - (this.pageX - (isTouch ? event.changedTouches[0].pageX : e.pageX) );

// slide ���ړ�������
$(this).css({left:this.left, top:this.top});

// �ʒu X,Y ���W���o���Ă���
this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
},
/* �^�b�`�̏I���A�}�E�X�̃h���b�O�̏I�� */
'touchend mouseup': function(e) {
if (!this.touched) {
return;
}

// �^�b�`�����͏I���������߁A�t���O��������
this.touched = false;

// �K�v�Ȃ�ȉ��ōŏI�� slide �̈ʒu���擾�������Ɏg��
// this.pageX
// this.pageY
}
});

/////////touch end

		return this;
};
})(jQuery);