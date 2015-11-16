// JavaScript Document
window.onload=function ()
{
	var oButton1=document.getElementById("gnbutton");
	var oButton2=document.getElementById("gjbutton");
	var oContent1=document.getElementById("gnhotel");
	var oContent2=document.getElementById("gjhotel");
	
	oButton1.onclick=function ()
	{
		oContent1.style.display='block';
		oContent2.style.display='none';
		for(var i=0; i<2; i++){
			this.className='';
			oButton2.className='';
		}
		this.className='on';
	}
	oButton2.onclick=function ()
	{
		oContent1.style.display='none';
		oContent2.style.display='block';
		for(var i=0; i<2; i++){
			oButton1.className='';
			this.className='';
		}
		this.className='on';
	}
	fnFold();
	fnBanner();
	fnOption();
function fnOption(){
var oP=document.getElementsByClassName("option")[0];
var aOp=oP.getElementsByTagName("a");
var oImg=oP.getElementsByTagName("img")[0];
var arr=["images/a.jpg","images/b.jpg","images/c.jpg","images/d.jpg"];
for (var i = 0; i < aOp.length; i++) 
{
	 aOp[i].index=i; 
	 aOp[i].onmouseover=function ()
	 {
		 for (var j = 0; j < aOp.length; j++) 
		 {
			 aOp[j].className="";	     	
		 }
		 aOp[this.index].className="option-active";
		 oImg.src=arr[this.index]
	 }
 }
}
/*banner部分*/

function fnBanner(){
	var myBanner=document.getElementsByClassName("banner")[0];
	var oUl=myBanner.getElementsByTagName("ul")[0];
	var oLi=oUl.getElementsByTagName("a");
	var aOl=myBanner.getElementsByTagName("ol")[0];
	var aLink=aOl.getElementsByTagName("a");
	for (var i = 0; i < aLink.length; i++)
	{
	  aLink[i].index=i;
	  aLink[i].onmouseover=function ()
	  {
		for (var j = 0; j < aLink.length; j++)
		{
		  oLi[j].style.display="none";
		  aLink[j].className="";    
		};
		  oLi[this.index].style.display="block";
		  aLink[this.index].className="active";
	  }
	}
}
}
function fnFold()
{
  var fold=document.getElementsByClassName("fold")[0];
  var oUl = document.getElementById("sm");
  var oLi = oUl.getElementsByTagName("li");
  var aMask = fold.getElementsByClassName("mask_b");
    
    for( var i=0; i<oLi.length;i++)
	{
		  oLi[i].style.width = '133px';
		  oLi[0].style.width = '402px';
			
		  oLi[i].index = i;   //每一个的下标就为每一个  *******这个要记得方法啦
		  oLi[i].onmouseover = function()
		  {
			 // oLi[i].style.width = (oUl.offsetWidth - 400)/(oLi.length-1)+'px';
			  for( var j=0; j<oLi.length;j++)
			  {
				   oLi[j].style.width = '133px';
				 
				   aMask[j].style.display = 'block';
				   oLi[j].style.transition = 'all .5s';
			  }
			  this.style.width = '400px';  
			  aMask[this.index].style.display = 'none';
		  } 
		  oLi[i].onmouseout = function()
		  {
			  for( var j=0; j <oLi.length;j++)
			  {
				   oLi[j].style.width = '133px';
				   aMask[j].style.display = 'block';
				   //Li[j].style.transition = 'all .5s';
			  }
			  //oLi[0].style.width="402px";
		  }
    }	
}
