function bianhuan(flag) {
	document.getElementById("active0").className = "";
	document.getElementById("m0").className = "module1-info";
	document.getElementById("active1").className = "";
	document.getElementById("m1").className = "module1-info";
	document.getElementById("active2").className = "";
	document.getElementById("m2").className = "module1-info";
	document.getElementById("active3").className = "";
	document.getElementById("m3").className = "module1-info";
	document.getElementById("active" + flag).className = "active";
	document.getElementById("m" + flag).className = "module1-info active";
}

function showDate() {
	var curDate = new Date();
	var year = curDate.getFullYear();
	var month = curDate.getMonth() + 1;
	var date = curDate.getDate();
	var day = curDate.getDay();
	var week = ["日", "月", "火", "水", "木", "金", "土"];
	var hours = curDate.getHours();
	var minutes = curDate.getMinutes();
	var seconds = curDate.getSeconds();
	var str;
	str = year + "年" + time(month) + "月" + time(date) + "日" + week[day] + "曜日" + "<br>" + time(hours) + "時" + time(
			minutes) +
		"分" + time(seconds) + "秒";
	document.getElementById("showtime").innerHTML = str;
}

function time(x) {
	return x > 9 ? x : "0" + x;
}

var iCount = 1;
window.onload = function() {
	showDate();
	setInterval(showDate, 1000);

	document.getElementById("zuojiantou").onclick = function() {	
		iCount--;
		if (iCount == 0) {
			iCount = 4;
		}
		document.getElementById("keshiki").src = "img/b-ad" + iCount + ".jpg";
	}
	document.getElementById("youjiantou").onclick = function() {
		iCount++;
		if (iCount == 5) {
			iCount = 1;
		}
		document.getElementById("keshiki").src = "img/b-ad" + iCount + ".jpg";
		val1 = 0;	
	}
	var iCarouselid = window.setInterval("carousel()", 8000);
	var timer = window.setInterval("colorLiner()", 40);
}

function carousel() {
	var sImgSrc = eval("'img/b-ad'+iCount.toString()+'.jpg'");
	var sAchange = eval("'a'+iCount.toString()");
	document.getElementById("keshiki").src = sImgSrc;
	iCount = iCount + 1;
	if (iCount == 5) {
		iCount = 1;
	}
}
var val1 = 0;
function colorLiner() {
	var Div = document.getElementById("keshiki");
	if (val1 >= 0) {
		Div.style.opacity = val1 / 100+0.5;
	}
	if (val1 < 0) {
		Div.style.opacity = -val1 / 100+0.5;
	}
	if (val1 == -100) //由-100变为正100
	{
		val1 = -val1;
	}
	val1--;
}
