
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
 arr[0]="images/product1.jpg";
 arr[1]="images/product2.png";
 arr[2]="images/product3.png";
 arr[3]="images/product4.jpg";
 arr[4]="images/product5.png";

 
 var count=0;//设置全局变量

 // 切换图片功能
 function autoplayer(){

 	if(arr.length==count)  //先判断数组长度
 	count=0;//当点击4后自动转到count0
 	document.getElementById('banner1').src=arr[count];
 	//设置背景及字体颜色
 	ys();
 	var yanse=document.getElementById('span'+count);
 	yanse.style.background="silver";
 	yanse.style.color="black";

 	count++;

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

 	ys();//把span标签的背景及字体改变成出示状态

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

 //设置span标签颜色
  function ys(){
  	for(i=0;i<=4;i++){
  		var Allspan=document.getElementById('span'+i);
  		Allspan.style.background="seagreen";
  		Allspan.style.color="white";
  	}
  }