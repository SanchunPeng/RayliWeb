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
	})
	$("#banner_next_img").click(function(){
		_index++;
		if(_index>8){
			_index=1;
			$(".banner_container").css({'left':'0px'});
		}
		$(".banner_btn ul li").eq(_index).addClass("banner_li_hover").siblings().removeClass("banner_li_hover");
		$(".banner_container").animate({left:-_index*850},500);
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
	
})
