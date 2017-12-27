// JavaScript Document
;(function($){
	$.fn.tooltip=function(option){
			var defaults={
				ele:'.tooltip',
				x:100,
				y:200,
			};			//默认值
			var opts=$.extend(defaults,option);
			var x=opts.x;
			var y=opts.y;
			$(opts.ele).mouseover(function(e){
				this.myTitle=this.title;
				this.title="";
				var imgTitle=this.myTitle?"<br>"+this.myTitle:"";
				var tooltip="<div id='tooltip'><img src='"+this.href+"'alt='产品预览图'/>"+imgTitle+"<\/div>";  
				$("body").append(tooltip);   
				$("#tooltip")
					.css({
						"top":(e.pageY+y)+"px",
						"left":(e.pageX+x)+"px"
					}).show("fast");
		
			}).mouseout(function(){
				this.title=this.myTitle;
				$("#tooltip").remove();
			}).mousemove(function(e){
				$("#tooltip")
					.css({
					"top":(e.pageY+y)+"px",
					"left":(e.pageX+x)+"px"
					});
			});
		
	};
})(jQuery);
