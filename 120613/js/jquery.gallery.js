;(function($){
$.fn.gallery = function(option) {
		   var settings = $.extend({
					right: null,
					left: null,
					thum: null
	       }, option);
		   
		   var liNum = $(this).children("li").length;		   // li�̐��擾
		   var liWidth = $(this).children("li").width();	   // li�̕��擾
		   var ulWidth = liWidth*liNum;		  		   // ul�̕��擾
		   var moveLimit = ulWidth-liWidth;			   // ul�̈ړ���������
		   $(this).width(ulWidth);		   		   // #bigImg�̕�����
		   // �i���o�����O�p�摜�����ԍ�
		   var imageNum = 1;
		   
		   //�@�����̉摜�����\��
		   $("span.current").text(1);
		   $("span.total").text(liNum);
		   
			// �摜�i���o�����O
			$(this).find("img").each(function(){
				var detaNum = imageNum++;
				$(this).attr("deta-img",detaNum);
				if ($(this).is("li:last-child img")){
				return this;
				}
			});
			
			// ��摜�̃f�[�^����T���l�C���\��
				var thumDate = $(this).html();
				$(settings.thum).html(thumDate);
				$(settings.thum).find("li:first-child img").addClass("select"); //�����I�����
				if ($(this).is("li:last-child img")){
				return this;
				}
		
		function changeTo(direction){
			   		// ���E�ƃT���l�N���b�N�ł̓��씻��
					if (direction == 0){
						var plusMinus = "-=";
						var direction = 2;
					} else if(direction == -1){
						var plusMinus = "+=";
						var direction = 2;
					} else if(direction >= 1){
						var plusMinus = "-";
					}
					// ����J�n
					console.log(this)
					$("#bigImg:not(:animated)").animate({marginLeft: plusMinus + (direction * liWidth - liWidth) + "px"},
						   {duration:"nomal",
							complete:function(){
								//�@�{�^���̕\����\��
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
								//�@�摜�����\��
								$("span.current").text(nowNumber);
								// �{�[�_�[�ύX
								var borderNum = parseInt(mLeft) / -liWidth;
								$(settings.thum).find("li img").removeClass("select");
								$(settings.thum).find("li img").eq(borderNum).addClass("select");
							}
						   });

			   }
			// next�{�^���N���b�N
			$(settings.right).click(function(){
										var direction = 0;
										changeTo(direction);
										return false;
				});

			// prev�{�^���N���b�N
			$(settings.left).click(function(){
										var direction = -1;
										changeTo(direction);
										return false;
				});
			
			// �T���l�C���N���b�N
			$(settings.thum).find("li img").click(function(){
				var Num = $(this).attr("deta-img");
				changeTo(Num);
				return false;
			});
	return this;
};
})(jQuery);