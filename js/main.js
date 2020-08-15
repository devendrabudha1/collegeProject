function changeColor(form1){
  for(var i=0; i<document.form1.color.length; i++){
    if(document.form1.color[i].checked){
      alert(document.form1.color[i].value);
      return;
      }
  }
}
function chooseConcentration(form1){
  for(var i=0;i<document.form1.KCGgroup.options.length;i++){
    if(document.form1.KCGgroup.options[i].selected){
      alert(document.form1.KCGgroup.options[i].text);
    }
  }
}
function chooseHobby(form1){
  var str="";
  for(var i=0;i<document.form1.hobby.length;i++){
    if(document.form1.hobby.options[i].selected){
      if(str!=""){
        str=str+",";
      }
      str=str+document.form1.hobby.options[i].text;
    }
  }
  alert(str);
}
function languageLearned(form1){
  var items=document.getElementsByName('language');
  var selectedItems="";
  for(var i=0;i<items.length;i++){
    if(items[i].type=="checkbox" && items[i].checked==true){
      selectedItems+=items[i].value+"\n";
    }
  }
  alert(selectedItems);
}
// loading jsworld page
// $("ul li a, .sidebar a").on("click", function(){
//   let url=$(this).attr("href");
//   $("#maincontent").load(url);
//   return false;
// });

// LoADING deffault page home.html
// function defaultPage(){
//   let url="jsworld.html";
//   $("#maincontent").load(url);
// }

// Open and close Window
var myWindow;


function openWin() {
  myWindow = window.open("jsworld.html", "myWindow", "width=500, height=400");
}

function closeWin() {
  myWindow.close();
}

// Move window
var win;
function openMoveWindow() {
  win = window.open("jsworld.html", "win", "width=300, height=250");
}

function moveWindow() {
  win.moveBy(250, 250);
  win.focus();
}

function closeWindow(){
  win.close();
}

//Resize By window
var rwindow;
function openResizeWindow() {
  rwindow = window.open("jsworld.html", "Resizing Window", "width=300, height=250");
}

function resizeWindow() {
  rwindow.resizeBy(400, 4000);
  rwindow.focus();
}
function closeResizeWindow(){
  rwindow.close();
}

// Loading image
// $(".imgNav ul li a").on("click", function(){
//   let url=$(this).attr("href");
//   $("#displayImage").load(url);
//   return false;
// });

function firstImage(){
  document.getElementById("img-source").src = "img/touristArea/kinkakuji.jpg";
}
function secondImage(){
  document.getElementById("img-source").src = "img/touristArea/kiyomizu.jpg";
}
function thirdImage(){
  document.getElementById("img-source").src = "img/touristArea/imperialPalace.jpg";
}
function fourthImage(){
  document.getElementById("img-source").src = "img/touristArea/byodoTemple.jpg";
}

// Hide and Show image
function hideImage(){
  $(".imageHideTab").hide(1000);
}
function showImage(){
  $(".imageHideTab").show(1000);
}

//Get the button
var mybutton = document.getElementById("myBtn");


// Index
function showMajor(){
  document.getElementById('majorDiv').style.color='red';
  document.getElementById('majorDiv').style.display='block';
  document.getElementById('downIcon').style.display='none';
  document.getElementById('upIcon').style.display='block';
}
function hideMajor(){
  document.getElementById('majorDiv').style.display='none';
  document.getElementById('upIcon').style.display='none';
  document.getElementById('downIcon').style.display='block';
}
function showSkills(){
  document.getElementById('content').style.display='block';
  document.getElementById('content').style.color='red';
  document.getElementById('contentDownIcon').style.display='none';
  document.getElementById('contentUpIcon').style.display='block';
}
function hideSkills(){
  document.getElementById('content').style.display='none';
  document.getElementById('contentUpIcon').style.display='none';
  document.getElementById('contentDownIcon').style.display='block';
}

// Getting image of Shop
function myfunction(input)
{
  var getImg = document.getElementById("img-source");
  getImg.src = input.src;
}

// Form validation
	var item=["Please input your name.","Please input your age.","Please input your telephone number","Please input your email."];

	function check(){
		var elem =document.form.elements;
		for(var i=0;i<4;i++){
			if(elem[i].value !=""){
				elem[i].style.color="#0000FF";
				switch(elem[i].name){
					case "age":
						if(isNaN(elem[i].value)){
							alert("Please input correct age.");
							elem[i].style.color="#FF0000";
						}else if(elem[i].value<0){
							elem[i].style.color="#FF0000";
							alert("You did not input the correct numbers.");
						}
						break;

					case "tel":
						if(!elem[i].value.match(/^\d{2,3}-\d{4}-\d{4}$/)){
							elem[i].style.color="#FF0000";
							alert("Please input correct telephone number");
						}
					break;

					case "mail":
						if(!elem[i].value.match(/^\S+@\S+\.\S+$/)){
							elem[i].style.color="#FF0000";
							alert("Please input correct e-mail number.");
						}
					break;
				}
			}else{
				alert(item[i]);
			}
		}
	}



// Digital clock
function show2(){
if (!document.all&&!document.getElementById)
    return
    thelement=document.getElementById? document.getElementById("digitalClock"): document.all.tick2
    var Digital=new Date()
    var hours=Digital.getHours()
    var minutes=Digital.getMinutes()
    var seconds=Digital.getSeconds()
    var dn="PM"
    if (hours<12)
    dn="AM"
    if (hours>12)
    hours=hours-12
    if (hours==0)
    hours=12
    if (minutes<=9)
    minutes="0"+minutes
    if (seconds<=9)
    seconds="0"+seconds
    var ctime=hours+":"+minutes+":"+seconds+" "+dn
    thelement.innerHTML="<b style='font-size:14;color:blue;'>"+ctime+"</b>"
    setTimeout("show2()",1000)
}
window.onload=show2;



// animation
imgLeftStart = 0;
var w = window.screen.width;
if(w<500){
  imgLeftEnd=450;
}else{
  imgLeftEnd=680
}
imgLeft = imgLeftStart;
imgTop = 200;
moveStep = 5;
moveSpeed = 100;
function moveImgX(){
  document.getElementById("img12").style.top = imgTop;
  document.getElementById("img12").style.left = imgLeft;
  if(imgLeftEnd-imgLeftStart > 0){
    imgLeft += moveStep;
    if(imgLeft > imgLeftEnd){
      imgLeft = imgLeftStart;
    }
  }else{
    imgLeft -= moveStep;
    if(imgLeft < imgLeftEnd){
      imgLeft = imgLeftStart;
    }
  }
  document.getElementById("img12").style.visibility="visible";
  setTimeout("moveImgX()",moveSpeed);
}
