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

/* �^�b�`�̊J�n���̃C�x���g */
/* �^�b�`�ł�����Ȃ� true�A�����łȂ��Ȃ� false �B
�����Ő�ɔ��ʂ��Ă����܂��B */
var isTouch = ('ontouchstart' in window);

/* hoge �̃C�x���g�� jQuery.bind �ŕߊl���܂��B */
$(slide).bind({

/* �^�b�`�̊J�n�A�}�E�X�{�^�����������Ƃ� */
'touchstart mousedown': function(e) {
// �y�[�W����������A�������~�߂�
e.preventDefault();

// �J�n�ʒu X,Y ���W���o���Ă���
// �itouchmove �C�x���g��ʂ炸�I�������Ƃ��̂��߂ɕK���o���Ă������Ɓj
this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);

// ���݂� hoge �̏ꏊ���o���Ă���
this.left = $(this).position().left;
this.top = $(this).position().top;

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

// �ړ���� hoge �̈ʒu���擾����
this.left = this.left - (this.pageX - (isTouch ? event.changedTouches[0].pageX : e.pageX) );
this.top = this.top - (this.pageY - (isTouch ? event.changedTouches[0].pageY : e.pageY) );

// hoge ���ړ�������
$(this).css({left:this.left, top:this.top});

// �ʒu X,Y ���W���o���Ă���
this.pageX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
this.pageY = (isTouch ? event.changedTouches[0].pageY : e.pageY);
},
/* �^�b�`�̏I���A�}�E�X�̃h���b�O�̏I�� */
'touchend mouseup': function(e) {
if (!this.touched) {
return;
}

// �^�b�`�����͏I���������߁A�t���O��������
this.touched = false;

// �K�v�Ȃ�ȉ��ōŏI�� hoge �̈ʒu���擾�������Ɏg��
// this.pageX
// this.pageY
}
});

/////////touch end

		return this;
};
})(jQuery);