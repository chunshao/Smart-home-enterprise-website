
// 二级菜单隐藏显示
 function showobj(id){
 	var obj = document.getElementById(id);
 	obj.style.display="";

 }

 function hiddenobj(id){

 	var obj = document.getElementById(id);

 	obj.style.display="none";
 }

 // banner广告图片自动切换

 // 实例化一个数组,用于存属图片路径
 var arr = new Array;
 arr[0]="images/banner1.jpg";
 arr[1]="images/banner2.jpg";
 arr[2]="images/banner3.jpg";
 arr[3]="images/banner4.jpg";

 
 var count=0;//设置全局变量

 // 切换图片功能
 function autoplayer(){

 	if(arr.length==count)  //先判断数组长度
 	count=0;//当点击4后自动转到count0
 	document.getElementById('banner1').src=arr[count];

 	ys();
 	var yanse=document.getElementById('span'+count);
 	yanse.style.background="silver";
 	yanse.style.color="black";
 	count++;

 }

 //清除标签所有的背景和字体颜色
 function ys(){

 	for(var i=0;i<=3;i++){
 		
 	var Allspan= document.getElementById('span'+i);
 	Allspan.style.background="seagreen";
 	Allspan.style.color="white";	
 	}
 	
 }


//设置自动播放定时器
 var Timer = setInterval(autoplayer, 2000);

 //定义清除定时器对象
 function clearTimer(){

 	clearInterval(Timer);
 }

  //鼠标悬停指定播放图片
 function showbannerbyid(num){
 	clearTimer();//先调用 清除定时器
 	var index  = parseInt(num);//把传入的num转化为index类型
 	ys();
 	var yanse=document.getElementById('span'+(index-1));
 	yanse.style.background="silver";	
 	yanse.style.color="black";
 	document.getElementById('banner1').src=arr[index-1];  //index要-1
 	count=index;


 }

  //鼠标离开自动恢复播放图片
 function btnmouseout(){
 	Timer = setInterval(autoplayer, 2000);//设置定时器
 }



 //设置无缝轮播图片的功能

<!--

 var speed=10;
 var tab  = document.getElementById("demo");
 var tab1 = document.getElementById("demo1");
 var tab2 = document.getElementById("demo2");
 tab2.innerHTML = tab1.innerHTML;

//创建无缝轮播Marquee函数
 function Marquee(){

 	if(tab2.offsetWidth-tab.scrollLeft<=0){
 		tab.scrollLeft-=tab1.offsetWidth;
 		
 	}else{
 		tab.scrollLeft++;
 	}
 }

var mymar =setInterval(Marquee, speed);

tab.onmouseover= function(){
	clearInterval(mymar);
}

tab.onmouseout= function(){
	mymar= setInterval(Marquee, speed);
}

-->





