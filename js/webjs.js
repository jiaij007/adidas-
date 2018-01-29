$(function(){
	$(".menu li").mouseenter(function(){
		$(this).css({"background":"#fff"});
		$(this).find("span").css({"color":"black"});
		$(".menu li").not($(this)).css({"background":"black"});

		$(this).find(".down").slideDown(200).show();
		$(".down").not($(this)).find(".down").slideUp(200).hide();
	});

	$(".menu li").mouseleave(function(){
		$(this).find(".down").hide();
		$(this).find("span").css({"color":"#fff"});
		$(this).css({"background":"black"});
	});

	var i=0;
	var timer=null;

	$(".pic img").eq(0).show().siblings().hide();
	$(".pic_menu span").hover(function(){
		i = $(this).index();
		show();
		clearInterval(timer);
	},function(){
		showTime();
	})
	
	$(".btn_prev").click(function(){
		clearInterval(timer);
		if (i == -1) {
			i = 3;
		}
		i--;
		show();
		showTime();

	});


	$(".btn_next").click(function(){
		clearInterval(timer);
		if (i == 2) {
			i = -1;
		}
		i++;
		show();
		showTime();

	});


	function show(){
		$(".pic img").eq(i).fadeIn().siblings().fadeOut();
	    $(".pic_menu span").eq(i).addClass("active").siblings().removeClass("active");
	}

	function showTime(){
		timer=setInterval(function(){
			
			if (i == 3) {
				i=0;
			}
			show();
			i++;
		},3000);
	}
	

})