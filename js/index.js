$(function(){
	//搜索框隐藏和显示
	$(".header_nav_search_show").click(function(){
		$(".header_nav_search").show();
		$(".header_nav_search_show").hide();
	});
	$(".header_nav_search_btn").click(function(){
		$(".header_nav_search").hide();
		$(".header_nav_search_show").show();
	});
	
	//轮播图
	var _index=1;
	$(".banner_btn ul li").click(function(){
		_index=$(this).index();
		$(this).addClass("banner_li_hover").siblings().removeClass("banner_li_hover");
		$(".banner_container").animate({left:-_index*850},500);
	});
	
	$("#banner_next_img").mouseover(function(){
		$(this).css({'background':'rgba(234, 46, 46, 0.7)'});
	}).mouseout(function(){
		$(this).css({'background':'rgba(0, 0, 0, 0)'});
	});
	$("#banner_next_img").click(function(){
		_index++;
		if(_index>8){
			_index=1;
			$(".banner_container").css({'left':'0px'});
		}
		$(".banner_btn ul li").eq(_index).addClass("banner_li_hover").siblings().removeClass("banner_li_hover");
		$(".banner_container").animate({left:-_index*850},500);
	});
	$("#banner_prev_img").mouseover(function(){
		$(this).css({'background':'rgba(234, 46, 46, 0.7)'});
	}).mouseout(function(){
		$(this).css({'background':'rgba(0, 0, 0, 0)'});
	});
	$("#banner_prev_img").click(function(){
		_index--;
		if(_index<1){
			_index=8;
			$(".banner_container").css({'left':'(850*9)px'});
		}
		$(".banner_btn ul li").eq(_index).addClass("banner_li_hover").siblings().removeClass("banner_li_hover");
		$(".banner_container").animate({left:-_index*850},500);
	});
	
	//content_one_left_top时装专栏
	$(".content_one_left_topBtn ul li").mouseover(function(){
		$(this).addClass("one_left_top_hover").siblings().removeClass("one_left_top_hover");
		var index_top=$(this).index();
		$(".content_one_left_top ul li").eq(index_top).fadeIn().siblings("li").fadeOut();
	});
	
	//content_one_left_bottom
	var index_bottom=0;
	var time_bottom=null;
	$("ul.content_one_left_bottom_flashBtn li").mouseover(function(){
		clearInterval(time_bottom);
		index_bottom=$(this).index();
		$(this).addClass("one_left_bottom_hover").siblings().removeClass("one_left_bottom_hover");
		$(".content_one_left_bottom_flash").stop().animate({left:-index_bottom*280},400);
	})
	$("ul.content_one_left_bottom_flashBtn li").mouseout(function(){
		autoFlash();
	})
	autoFlash();
	function autoFlash(){
		time_bottom=setInterval(function(){
			index_bottom++;
			if(index_bottom>3){
				index_bottom=0;
			}
			$("ul.content_one_left_bottom_flashBtn li").eq(index_bottom).addClass("one_left_bottom_hover").siblings().removeClass("one_left_bottom_hover");
			$(".content_one_left_bottom_flash").stop().animate({left:-index_bottom*280},400);
		},2000);	
	}
	
	//content_one_right_top Start 抢先试用
	var right_index=0;//记录每一次通过按钮或者鼠标选择的li的index
	$(".content_one_right_btn ul li").mouseover(function(){
		right_index=$(this).index();
		$(".content_one_right_btn ul li").eq(right_index).addClass("content_one_right_top_hover").siblings("li").removeClass("content_one_right_top_hover");
		$(".content_one_right_img").animate({left:-right_index*180},230);
		
	});
	$("#content_one_prev_img").click(function(){
		right_index--;
		if(right_index<0){
			right_index=4;
		}
		$(".content_one_right_btn ul li").eq(right_index).addClass("content_one_right_top_hover").siblings("li").removeClass("content_one_right_top_hover");
		$(".content_one_right_img").animate({left:-right_index*180},230);
	})
	$("#content_one_next_img").click(function(){
		right_index++;
		if(right_index>4){
			right_index=0;
		}
		$(".content_one_right_btn ul li").eq(right_index).addClass("content_one_right_top_hover").siblings("li").removeClass("content_one_right_top_hover");
		$(".content_one_right_img").animate({left:-right_index*180},230);
	})
})
