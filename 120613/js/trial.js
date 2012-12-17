$(function() {
		   var liNum = $("#bigImg li").length		   // li�̐��擾
		   var liWidth = $("#bigImg li").width()	   // li�̕��擾
		   var ulWidth = liWidth*liNum		  		   // ul�̕��擾
		   var moveLimit = ulWidth-liWidth			   // ul�̈ړ���������
		   $("#bigImg").width(ulWidth);		   		   // #bigImg�̕�����
		   
		   // �i���o�����O�p�摜�����ԍ�
		   var imageNum = 1
		   var sumNum = 1
		   
		   //�@�����̉摜�����\��
		   $("span.current").text(1);
		   $("span.total").text(liNum);
		   
		   //�@�����̉摜�{�[�_�[�\��
		   $("#thum li:first-child img").css("border", "1px solid #f00")
		   
			// �摜�i���o�����O
			$("#bigImg li img").each(function(){
				var detaNum = imageNum++
				$(this).attr("deta-img",detaNum);
				if ($(this).is("li:last-child img")){
				return false;
				}
			});
			
			// �T���l�C���i���o�����O
			$("#thum li img").each(function(){
				var detaNum = sumNum++
				$(this).attr("deta-img",detaNum);
				if ($(this).is("li:last-child img")){
				return false;
				}
			});
			
		   function changeTo(direction){
			   		// ���E�ƃT���l�N���b�N�ł̓��씻��
					if (direction == 0){
						var plusMinus = "-=";
						var direction = 2
					} else if(direction == -1){
						var plusMinus = "+=";
						var direction = 2
					} else if(direction >= 1){
						var plusMinus = "-";
					}
					// ����J�n
					$("#bigImg:not(:animated)").animate({marginLeft: plusMinus + (direction * liWidth - liWidth) + "px"},
						   {duration:"nomal",
							complete:function(){
								//�@�{�^���̕\����\��
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
								//�@�摜�����\��
								$("span.current").text(nowNumber);
								// �{�[�_�[�ύX
								var borderNum = parseInt(mLeft) / -liWidth
								$("#thum li img").css("border", "1px solid #aaa");
								$("#thum li img").eq(borderNum).css("border", "1px solid #f00");

							}
						   });

			   }
		   
			// next�{�^���N���b�N
			$("a#right").click(function(){
										var direction = 0
										changeTo(direction);
										return false;
				});
			
			// prev�{�^���N���b�N
			$("a#left").click(function(){
										var direction = -1
										changeTo(direction);
										return false;
				});
			
			// �T���l�C���N���b�N
			$("#thum li img").click(function(){
				var Num = $(this).attr("deta-img")
				changeTo(Num);
				return false;
			});

});