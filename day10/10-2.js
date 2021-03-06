// JavaScript Document
$(function(){
	var sWidth=$('#slider').width();//获取焦点图的宽度（显示面积）
	var len=$('#show li').length;//获取焦点图个数
	var index=0;
	var picTimer;
	
	$('#number li').mouseover(function(){
		index=$('#number li').index(this);
		showPics(index);
	}
	).eq(0).trigger('mouseover');
	


	//鼠标划上焦点图时停止自动播放，划出时开始自动播放
	$('#slider').hover(function(){
		clearInterval(picTimer);
	},function(){
		picTimer=setInterval(function(){
			index++;
			if(index==len){index=0;};
			showPics(index);
		},500);
	}).trigger('mouseout');
	
	//显示图片函数，根据接受的index值显示相应内容
	function showPics(index)//普通切换
	{
		var nowLeft=-index*sWidth;//根据index值计算ul元素的left值
		$('#show').stop(true,false).animate({'left':nowLeft},300);//通过animate（）调整ul元素滚动到计算出的position
		$('#number li').removeClass("on").eq(index).addClass("on");
	}
});