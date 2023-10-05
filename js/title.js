window.onload = function() {
	showDate();
	setInterval(showDate, 1000);
}


function time(x) {
	return x > 9 ? x : "0" + x;
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