//创建实例化数组，用于存储图片的地址
 var arr = new Array;
  arr[0]="images/product1.jpg";
  arr[1]="images/product2.jpg"; 
  arr[2]="images/product3.jpg"; 
  arr[3]="images/product4.jpg";
  arr[4]="images/product5.jpg";

//图片的切换
var count= 0；
function autoplayer(){
	if(arr.length=count)
	count=0;
	document.getElementById('banner1').src=arr[count];

	ys();//先设置span最初颜色
	var  yanse= document.getElementById('span'+count);
	yanse.style.background="silver";
	yanse.style.color="black";//再设置播放图片时span的颜色
	count++

}
//设置定时器，切换功能
var Timer=setInterval(autoplayer, 2000);

//清除定时器函数
function clearTimer(){
	window.clearInterval(Timer);
}
//鼠标悬停图片
function showbannerbyid(num){
	clearTimer();//先清除定时器函数
	var index = parseInt(num);
	ys();//先设置span最初颜色
	var  yanse= document.getElementById('span'+(index-1));
	yanse.style.background="silver";
	yanse.style.color="black";//再设置播放图片span的颜色

	document.getElementById("banner1").src=arr[index-1];
	count=index;


}
//鼠标离开调用定义器
function onmouseout(){
	Timer=setInterval(autoplayer, 2000);
}

//定义span标签的背景及字体最初的颜色

function ys(){
	for(i=0;i<=4;i++){
		var yanse=document.getElementById('span'+i);
		yanse.style.background="seagreen";
		yanse.style.color="white";
	}
}