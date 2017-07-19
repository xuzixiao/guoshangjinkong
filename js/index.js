//index JavaScript Document
$(function(){

$(".s1-con").css({"top":"10%","opacity":"0"});
$(".zhezhao").css({"opacity":"0.6"});
$(".s1-list").css({"bottom":"-300px","opacity":"0"});
$(".s2-con-box h2").css({"top":"-100px","opacity":"0"}).hide(0);
$(".and").css({"opacity":"0"});
$(".s2-list>li").css({"opacity":"0"});
$(".s2-con-slogen").css({"opacity":"0","bottom":"100px"});
$(".s3-con h2").css({"opacity":"0","left":"200px"});
$(".s3-list").css({"opacity":"0","left":"200px"});
$(".s4-con h2").css({"opacity":"0","left":"200px"});
$(".s4-list").css({"opacity":"0","left":"200px"});


	$('#fuhua').fullpage({
		//sectionsColor: ['#fff', '#fff'],
		navigation: true,//小圆点导航
		navigationPosition:'left',//导航在右
		//navigationTooltips:['1','2'],//鼠标经过小圆点导航时显示说明
		//showActiveTooltip:true,//显示小圆点导航说明 默认不显示
		//scrollingSpeed:700 切换速度
		anchors:['page1','page2','page3','page4'],//锚链接
		//loopTop:true, 循环滚动
		//loopBottom:true,循环滚动
		//loopHorizontal:true ,  "slide循环滚动"
		//autoScrolling:false,  //关闭翻页滚动，页面按照滚动条滚动
		//scrollBar:true,//右侧出现滚动条
		paddingTop:'0px',//头部内边距出多少
		//paddingBottom:'0px',//底部内边距多少
		fixedElements:'#nav-box',//定位div id固定顶部
		touchSensitivity:100,//滑动敏感度,默认5，最高100，越高滑动越困难
		//continuousVertical:true,//页面是否循环滚动,默认false
		meum:'#nav-box',
		//sectionSelector:section,//section选择器，默认section
		//slideSelector:slide,//slide选择器，默认slide
		verticalCentered:false,//内容垂直居中
		//resize:true,//文字随窗口大小变化
		//scrollBar:true,//文本超出显示滚动条
	afterLoad:function(link,index){
			//console.log(index,link);	
switch(index){
case 1:
$(".zhezhao").animate({"opacity":"0"},2000,function(){
	$(".zhezhao").hide(0);	
})
$(".s1-con").animate({"top":"18%","opacity":"1"},1500)
$(".s1-list").animate({"bottom":"40px","opacity":"1"},1500);	

break;
case 2:
$(".s2-con-box h2").show(0).animate({"top":"0px","opacity":"1"},1500,function(){
	$(".s2-list>li").eq(0).animate({"opacity":"1"},500,function(){
 		$(".and1").animate({"opacity":"1"},500,function(){
			$(".s2-list>li").eq(1).animate({"opacity":"1"},500,function(){
				 $(".and2").animate({"opacity":"1"},500,function(){
					 $(".s2-list>li").eq(2).animate({"opacity":"1"},500,function(){
					     $(".s2-con-slogen").animate({"opacity":"1","bottom":"10px"},1500);
					  }); 
				   });
				});
			});
		})
	});
break;
case 3:
$(".s3-con h2").animate({"opacity":"1","left":"0px"},1000,function(){
	   $(".s3-list").animate({"opacity":"1","left":"0px"},1000);
	});
break;
case 4:

$(".s4-con h2").animate({"opacity":"1","left":"0px"},1000,function(){
$(".s4-list").animate({"opacity":"1","left":"0px"},1000,function(){
$(".footer").animate({"bottom":"0px"},500)	

});
});



break;

 default:
break;
}
},//当鼠标进入section触动动画
			
onLeave:function(index,nextIndex,direction){
if(direction=="down"){
switch(index){
case 1:
//move(".h3-tip").delay(0).set("width","400px").rotate(0).duration(1000).end();
$(".s1-con").animate({"top":"10%","opacity":"0"},300)
$(".s1-list").animate({"bottom":"-200px","opacity":"0"},300);			 
break;				
case 2:
$(".s2-con-box h2").show(0).animate({"top":"-100px","opacity":"0"},100,function(){
	$(".s2-list>li").eq(0).animate({"opacity":"0"},300,function(){
 		$(".and1").animate({"opacity":"0"},100,function(){
			$(".s2-list>li").eq(1).animate({"opacity":"0"},300,function(){
				 $(".and2").animate({"opacity":"0"},100,function(){
					 $(".s2-list>li").eq(2).animate({"opacity":"0"},300,function(){
					     $(".s2-con-slogen").animate({"opacity":"0","bottom":"-100px"},100);
					  }); 
				   });
				});
			});
		})
	});
break;
case 3:
$(".s3-con h2").animate({"opacity":"0","left":"300px"},300,function(){
	
	 $(".s3-list").animate({"opacity":"0","left":"200px"},300);
	
	});
break;
case 4:
break;				
default:
break;
}				
}else if(direction=="up"){
switch(index){
case 1:
//  move(".h3-tip").delay(0).set("width","700px").duration(1000).end(); 
break;
case 2:
$(".s2-con-box h2").show(0).animate({"top":"-100px","opacity":"0"},100,function(){
	$(".s2-list>li").eq(0).animate({"opacity":"0"},100,function(){
 		$(".and1").animate({"opacity":"0"},100,function(){
			$(".s2-list>li").eq(1).animate({"opacity":"0"},100,function(){
				 $(".and2").animate({"opacity":"0"},100,function(){
					 $(".s2-list>li").eq(2).animate({"opacity":"0"},100,function(){
					     $(".s2-con-slogen").animate({"opacity":"0","bottom":"-100px"},100);
					  }); 
				   });
				});
			});
		})
	});
break;
case 3:
$(".s3-con h2").animate({"opacity":"0","left":"300px"},300,function(){
	$(".s3-list").animate({"opacity":"0","left":"200px"},300);
	});
break;
case 4:
	
$(".s4-con h2").animate({"opacity":"0","left":"200px"},0,function(){
$(".s4-list").animate({"opacity":"0","left":"200px"},0,function(){
$(".footer").animate({"bottom":"-90px"},1000)

});
});


break;



				
}//if
}//switch
},//onleave
});//fullpage
	
	
//main texiao
	   
$(".kefu-li span").mouseenter(function(){
	$(this).parent(".kefu-li").find(".kefu-con").animate({"right":"40px"},500);
	})
$(".kefu-li").mouseleave(function(){
	$(this).find(".kefu-con").animate({"right":"-160px"},500);
	$(this).find("span").css("background","#2F2725");
	})
$("#kefu-tb1").mouseenter(function(){
	$(this).css({"background":"#6c8c9d"})
	})
	
	
$("#kefu-tb2").mouseenter(function(){
	$(this).css({"background":"#00a0e9"})
	})
	
$("#kefu-tb3").mouseenter(function(){
	$(this).css({"background":"#d70050"})
	})	
	
$("#kefu-tb4").mouseenter(function(){
	$(this).css({"background":"#6c8c9d"})
	})				
	
$("#kefu-tb5").mouseenter(function(){
	$(this).css({"background":"#E73828"})
	})		
		

$(".io").click(function(){
	/*没展开时*/
	if($(".nav").css("display")=="none"){
    $(".shanshuo").hide();
	$(".io-close").show(); 
	$(".nav").show();
	$(".nav").animate({"height":"100%"},1000,function(){

	
		})
	}else{
   /*展开时*/
		$(".shanshuo").show();
		$(".io-close").hide(); 
		$(".nav").animate({"height":"0%"},1000,function(){
		$(".nav").hide(50);
	
		})
		
		
		
		
		}	
	})
	
//预约理财师
$("#yuyuelicai").click(function(){
	$("#yuyue").show();
	})
$(".lc-close").click(function(){
	$(this).parents(".yuyuelicai").hide();
	})
$("#ljyy").click(function(){
	if($("#yuyue-tel").val()==""){
		alert("请您输入您的联系方式！")
		}else{
			$("#yuyue").hide();
			$("#yuyuechenggong").show();
			}
	
	})	
$("#queding").click(function(){
	$(this).parents(".yuyuelicai").hide();
	})

	
		
});