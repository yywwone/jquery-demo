// JavaScript Document
$(function(){
	var currentIndex=0;
	var DEMO;						//延时器对象
	var currentID=0;				//获取鼠标下方的对象ID
	$("#ifocus_piclist li").eq(0).show();				//默认
	$("#ifocus_btn li").hover(function(){
		StopScrolll();
		$("#ifocus_btn li").removeClass("current");			//所有的li去掉当前的样式加上正常的样式
		$(this).addClass("current");						//本身加上当前的样式去掉正常的样式
		currentID=$(this).index();
		$("#ifocus_piclist li").eq(currentID).stop(true).fadeIn("slow");		//显示本身
		$("#ifocus_piclist li").not($("#ifocus_piclist li")[currentID]).hide();  //除了自身别的全部隐藏
		$("#ifocus_tx li").hide();
		$("#ifocus_tx li").eq(currentID).show();
		
		
	},function(){
		//当鼠标离开对象的时候获得当前的对象的ID以便能在启动自动时与其同步
		currentID=$(this).index();
		currentIndex=currentID;
		DEMO=window.setTimeout(autoScroll,1000);
		currentIndex++;
		currentIndex=currentIndex>=4?0:currentIndex;
		
	});
	//自动滚动
	function autoScroll(){					//局部函数   函数内定义的函数
		$("#ifocus_btn li:last").removeClass("current");
		$("#ifocus_tx li:last").hide();
		$("#ifocus_piclist li:last").hide();
		$("#ifocus_btn li").eq(currentIndex).addClass("current");
		$("#ifocus_btn li").eq(currentIndex-1).removeClass("current");
		$("#ifocus_tx li").eq(currentIndex).show();
		$("#ifocus_tx li").eq(currentIndex-1).hide();
		$("#ifocus_piclist li").eq(currentIndex).fadeIn(1000);
		$("#ifocus_piclist li").eq(currentIndex-1).hide();
		currentIndex++;
		currentIndex=currentIndex>=4?0:currentIndex;
		DEMO=window.setTimeout(autoScroll,1000);		//调用局部函数只写名字，通过函数名引用函数，类似变量名
		
	}
	function StopScrolll()				//当鼠标移动到对象上面的时候停止自动滚动
	{
		clearTimeout(DEMO);
					 
	}
	//鼠标移入大图时停止延时器
	$("#ifocus_piclist ul li").hover(function(){
		StopScrolll();
		$("#ifocus_btn li").removeClass("current");	//所有的li去掉当前的样式加上正常的样式
		currentID=$(this).index();
		$("#ifocus_btn li").eq(currentID).addClass("current");						//本身加上当前的样式去掉正常的样式
		currentID=$(this).index();
		$("#ifocus_piclist li").eq(currentID).stop(true).fadeIn("slow");		//显示本身
		$("#ifocus_piclist li").not($("#ifocus_piclist li")[currentID]).hide();  //除了自身别的全部隐藏
		$("#ifocus_tx li").hide();
		$("#ifocus_tx li").eq(currentID).show();
		
		
	},function(){
		//当鼠标离开对象的时候获得当前的对象的ID以便能在启动自动时与其同步
		currentID=$(this).index();
		currentIndex=currentID;
		DEMO=window.setTimeout(autoScroll,1000);
		currentIndex++;
		currentIndex=currentIndex>=4?0:currentIndex;
	});
	
	autoScroll();	//初始执行轮播
});