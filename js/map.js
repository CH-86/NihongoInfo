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

window.onload = function() {
	showDate();
	setInterval(showDate, 1000);
	initMap(); //创建和初始化地图
	// 东京
	document.getElementById("toukyou").onclick = function() {
		document.getElementById("shyoukai1").innerText = "东京（とうきょう、Tōkyō），日本首都   ，位于日本关东平原中部，是面向东京湾的国际大都市，日本三大都市圈之一东京都市圈的中心城市。   “东京”狭义上指东京都、旧东京府或东京都区部（旧东京市），亦可泛指东京都市圈   。东京是江户幕府的所在地，江户在庆应4年7月（1868年9月）改名为东京。";
		document.getElementById("shyoukai2").innerText = "东京的著名观光景点有东京铁塔、皇居、东京国会议事堂、浅草寺、浜离宫、上野公园与动物园、葛西临海公园、台场与彩虹大桥、东京迪士尼乐园、代代木公园、日比谷公园、新宿御苑、幕张奥特莱斯（outlets）、奥多摩湖、Hellokitty乐园、明治神宫、忍野八海、池袋、上野公园、东映动漫Gallery、涩谷、升仙峡、丰田汽车会馆、筑地市场、千鸟之渊、秋叶原、二重桥、隅田公园、滨离宫庭园Tsukiji鱼市等。";
		document.getElementById("shyoukaiimg").src="img/b-ad1.jpg";
		document.getElementById("shyoukailogo").src="logo/fukuokalogo.jpg";
		point = new BMap.Point(139.693292, 35.689831); //定义东京坐标
		map.centerAndZoom(point, 12);	
	}
	//京都
	document.getElementById("kyouto").onclick = function() {
		document.getElementById("shyoukai1").innerText = "京都府（罗马拼音：Kyoto-hu），位于日本本州岛的中部，属于日本三大都市圈之一大阪都市圈的组成部分，属于日本地域中近畿地方的中央以北，北濒日本海，东接福井县、滋贺县、三重县，南邻奈良县，西与大阪府、兵库县接壤。呈由东南朝西北伸展的细长形状，由3种地形组成，分别是西北端的环绕着舞鹤湾的里亚式海岸，中部的丹波山地和东部的京都盆地。";
		document.getElementById("shyoukai2").innerText = "京都的著名观光景点有东寺、西本愿寺、东本愿寺、京都御所、二条城、三十三间堂、北野天满宫、下鸭神社、平安神宫、清水寺、银阁寺、南禅寺、诗仙堂、曼殊院、修学院离宫、宝池公园、金阁寺、龙安寺、仁和寺、妙心寺、天龙寺、嵯峨野。";
		document.getElementById("shyoukaiimg").src="img/b-ad2.jpg";
		document.getElementById("shyoukailogo").src="logo/jingdulogo.jpg";
		point = new BMap.Point(135.864090, 35.204189); //定义京都坐标
		map.centerAndZoom(point, 12);
	}
	//北海道
	document.getElementById("hokkaidou").onclick = function() {
		document.getElementById("shyoukai1").innerText = "北海道（Hokkaido），是日本47个都道府县中唯一的道，属于日本地域概念中的北海道地区，也是最北的一级行政区，为日本除了本州以外最大的岛，也是世界面积第21大岛屿，略小于爱尔兰岛。南以津轻海峡界本州岛，北以宗谷海峡界库页岛。札幌是北海道的行政中心以及最大城市。以札幌为中心，北海道形成了日本三大都市圈以外著名的札幌都市圈。";
		document.getElementById("shyoukai2").innerText = "流冰破冰船“卡林果II号”和“极光号”、函馆的夜景、天人峡、根室港的流冰、宗谷岬、红砖瓦官舍、旭岳的花园、木制玩具世界、特拉比斯特派修道院、开阳丸（江差町）、北海道立青函隧道纪念馆（福岛町）、松前藩府邸（松前町）、旧中村家住宅（江差町）、椴法华村灯塔家族博物馆（椴法华村）、特拉比斯教修道院（上矶町）、濑棚青少年旅行村（濑棚町）、函馆滨水区（函馆市）、烧野见晴公园（大野町）、鲔之海角（乙部町）、惠山（惠山町）、五棱郭（函馆市）、浮岛公园（北桧山町）、大沼国定公园（气饭町）、等别地狱谷";
		document.getElementById("shyoukaiimg").src="img/b-ad3.jpg";
		document.getElementById("shyoukailogo").src="logo/kagawa.jpg";
		point = new BMap.Point(142.33, 43.33); //定义北海道坐标
		map.centerAndZoom(point, 12); //设定地图的中心点为北海道
	}
	document.getElementById("okinawa").onclick = function() {
		document.getElementById("shyoukai1").innerText = "冲绳县处于日本九州岛和中国台湾省之间，是日本国的一个行政区，属于日本地域中的九州地方。其以琉球群岛为中心，由宫古诸岛、八重山诸岛等岛屿组成，众多小的岛屿沿中国大陆围成一个弧线，土地面积占日本总面积的0.6%左右，在47个都道府县中位于第44位。";
		document.getElementById("shyoukai2").innerText = "京都的著名观光景点有首里城、守礼门、今仁城遗址、西表岛、宫古岛、竹富岛、渡嘉敷岛、多良间岛、万座毛、冲绳美之海水族馆、姬百合公园、古宇利岛";
		document.getElementById("shyoukaiimg").src="img/b-ad4.jpg";
		document.getElementById("shyoukailogo").src="logo/gifuulogo.jpg";
		point = new BMap.Point(127.7053, 26.3120); //定义北海道坐标
		map.centerAndZoom(point, 12); //设定地图的中心点为北海道
	}
	
}


// 以下地图

//创建和初始化地图函数：
function initMap() {
	createMap(); //创建地图
	setMapEvent(); //设置地图事件
	addMapControl(); //向地图添加控件
}
//创建地图函数：
function createMap() {
	var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
	var point = new BMap.Point(139.693292, 35.689831); //定义一个中心点坐标
	map.centerAndZoom(point, 12); //设定地图的中心点和坐标并将地图显示在地图容器中
	window.map = map; //将map变量存储在全局
}
//地图事件设置函数：
function setMapEvent() {
	map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
	map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
	map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
	map.enableKeyboard(); //启用键盘上下左右键移动地图
}
//地图控件添加函数：	
function addMapControl() {
	//向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({
		anchor: BMAP_ANCHOR_TOP_LEFT,
		type: BMAP_NAVIGATION_CONTROL_LARGE
	});
	map.addControl(ctrl_nav);
	//向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({
		anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
		isOpen: 1
	});
	map.addControl(ctrl_ove);
	//向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({
		anchor: BMAP_ANCHOR_BOTTOM_LEFT
	});
	map.addControl(ctrl_sca);
}
// 以上地图



function bianhuan(flag) {
	for(var i=1;i<9;i++)
	{
		document.getElementById("active" + i).className = "";
		document.getElementById("chihou"+i).style.display="none";
	}
	document.getElementById("active" + flag).className = "active";
	document.getElementById("chihou" + flag).style.display="block";
}
function bianhuan1(flag1) {
		var num=[1,6,7,9,7,5,4,8];
		var x=flag1-(flag1%10);//取十位数
		var y=x/10-1;//获得下标x/10,数组下标-1
		for(var j=1;j<=num[y];j++)
		{
			document.getElementById("chihou" + (x+j)).className = "";
			//document.getElementById("shyoukai2").innerText = x;
			document.getElementById("chihou_p"+(x+j)).style.display="none";
		}
		document.getElementById("chihou" + flag1).className = "on";
		document.getElementById("chihou_p"+flag1).style.display="block";
}