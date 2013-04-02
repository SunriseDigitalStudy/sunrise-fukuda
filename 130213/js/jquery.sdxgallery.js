;(function($){
$.fn.slide = function(option) {
		   var settings = $.extend({
					slideImg: null,
					galleryThum: null,
					thum: null,
					btn: null
		}, option);

		var slide = $(this);
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		var liNum = $(settings.slideImg).length;
		var ulWidth = liNum*screenWidth
		var innerWidth =$(window).width();
		var innerHeight =$(window).height();

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
			$(slide).css("margin-left", (-innerWidth*liNum+innerWidth) + "px");
			$(slide).show();
			$(settings.btn).show();
		});
		$(slide).width(ulWidth);
		$(settings.slideImg).width(innerWidth);
		$(this).height(innerHeight);
		$(".gallery").height(innerHeight);

var showHide = 0;


$(settings.slideImg).click(function(){
	var showHide = 1;
	displayTo(showHide);
	return false;
});

$("ul.gallery-list li img").click(function(){
	var showHide = 2;
	displayTo(showHide);
	return false;
});


function displayTo(showHide){
	if (showHide == 1){
		$(slide).css("display", "none");
		$(settings.btn).css("display", "none");
	} else if (showHide == 2){
		$(slide).css("display", "block");
	}
}


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