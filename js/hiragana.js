var hatsuon = ["a", "i", "u", "e", "o",
	"ka", "ki", "ku", "ke", "ko",
	"sa", "shi", "su", "se", "so",
	"ta", "chi", "tsu", "te", "to",
	"na", "ni", "nu", "ne", "no",
	"ha", "hi", "fu", "he", "ho",
	"ma", "mi", "mu", "me", "mo",
	"ya", "", "yu", "", "yo",
	"ra", "ri", "ru", "re", "ro",
	"wa", "", "", "", "wo",
	"n"
]
var gojyuuon = ["あ", "い", "う", "え", "お",
	"か", "き", "く", "け", "こ",
	"さ", "し", "す", "せ", "そ",
	"た", "ち", "つ", "て", "と",
	"な", "に", "ぬ", "ね", "の",
	"は", "ひ", "ふ", "へ", "ほ",
	"ま", "み", "む", "め", "も",
	"や", "", "ゆ", "", "よ",
	"ら", "り", "る", "れ", "ろ",
	"わ", "", "", "", "を",
	"ん"
]
var dakuon = ["が", "ぎ", "ぐ", "げ", "ご",
	"ざ", "じ", "ず", "ぜ", "ぞ",
	"だ", "ぢ", "づ", "で", "ど",
	"ば", "び", "ぶ", "べ", "ぼ",
	"ぱ", "ぴ", "ぷ", "ぺ", "ぽ",
]
var youon = ["きゃ", "きゅ", "きょ",
	"ぎゃ", "ぎゅ", "ぎょ",
	"しゃ", "しゅ", "しょ",
	"じゃ", "じゅ", "じょ",
	"ちゃ", "ちゅ", "ちょ",
	"ぢゃ", "ぢゅ", "ぢょ",
	"にゃ", "にゅ", "にょ",
	"ひゃ", "ひゅ", "ひょ",
	"びゃ", "びゅ", "びょ",
	"ぴゃ", "ぴゅ", "ぴょ",
	"みゃ", "みゅ", "みょ",
	"りゃ", "りゅ", "りょ",
]


var gojyuuon1 = ["ア", "イ", "ウ", "エ", "オ",
	"カ", "キ", "ク", "ケ", "コ",
	"サ", "シ", "ス", "セ", "ソ",
	"タ", "チ", "ツ", "テ", "ト",
	"ナ", "ニ", "ヌ", "ネ", "ノ",
	"ハ", "ヒ", "フ", "ヘ", "ホ",
	"マ", "ミ", "ム", "メ", "モ",
	"ヤ", "", "ユ", "", "ヨ",
	"ラ", "リ", "ル", "レ", "ロ",
	"ワ", "", "", "", "ヲ",
	"ン"
]
var dakuon1 = ["ガ", "ギ", "グ", "ゲ", "ゴ",
	"ザ", "じ", "ズ", "ゼ", "ゾ",
	"ダ", "ヂ", "ヅ", "で", "ド",
	"バ", "ビ", "ブ", "ベ", "ボ",
	"パ", "ピ", "プ", "ペ", "ポ",
]
var youon1 = ["キャ", "キュ", "キョ",
	"ギャ", "ギュ", "ギョ",
	"シャ", "シュ", "ショ",
	"ジャ", "ジュ", "ジョ",
	"チャ", "チュ", "チョ",
	"ヂャ", "ヂュ", "ヂョ",
	"ニャ", "ニュ", "ニョ",
	"ヒャ", "ヒュ", "ヒョ",
	"ビャ", "ビュ", "ビョ",
	"ピャ", "ピュ", "ピョ",
	"ミャ", "ミュ", "ミョ",
	"リャ", "リュ", "リョ",
]

var flag = 0;

function hira_onclick() {
	document.getElementById("hira").onclick = function() {
		document.getElementById("hira").style.backgroundColor = "#39C5BB";
		document.getElementById("kata").style.backgroundColor = "lightgoldenrodyellow";
		flag = 0;
		hiragana();
	}
}

function kata_onclick() {
	document.getElementById("kata").onclick = function() {
		document.getElementById("kata").style.backgroundColor = "#39C5BB";
		document.getElementById("hira").style.backgroundColor = "lightgoldenrodyellow";
		flag = 1;
		katakana();
	}
}

function katakana() {
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 5; j++) {
			if (gojyuuon1[i * 5 + j] != null) {
				document.getElementById("gojyuuon" + (i * 5 + j)).innerText = gojyuuon1[i * 5 + j];
				if (((i * 5 + j)!=36)&&((i * 5 + j)!=38)&&((i * 5 + j)!=46)&&((i * 5 + j)!=47)&&((i * 5 + j)!=48)) {
					document.getElementById("kanagif" + (i * 5 + j)).src = "img/" + hatsuon[i * 5 + j] + "1.gif";
				}

			}
		}
		
	}
	document.getElementById("gojyuuon50").innerText = gojyuuon1[50];
	document.getElementById("kanagif50").src = "img/n1.gif";
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			if (dakuon1[i * 5 + j] != null) {
				document.getElementById("dakuon" + (i * 5 + j)).innerText = dakuon1[i * 5 + j];
			}
		}
	}
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 3; j++) {
			if (youon1[i * 3 + j] != null) {
				document.getElementById("youon" + (i * 3 + j)).innerText = youon1[i * 3 + j];
			}
		}
	}
}

function hiragana() {
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 5; j++) {
			if (gojyuuon[i * 5 + j] != null) {
				document.getElementById("gojyuuon" + (i * 5 + j)).innerText = gojyuuon[i * 5 + j];
				if (((i * 5 + j)!=36)&&((i * 5 + j)!=38)&&((i * 5 + j)!=46)&&((i * 5 + j)!=47)&&((i * 5 + j)!=48)) {
					document.getElementById("kanagif" + (i * 5 + j)).src = "img/" + hatsuon[i * 5 + j] + ".gif";
				}		
			}
		}
	}
	document.getElementById("gojyuuon50").innerText = gojyuuon[50];
	document.getElementById("kanagif50").src = "img/n.gif";
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			if (dakuon[i * 5 + j] != null) {
				document.getElementById("dakuon" + (i * 5 + j)).innerText = dakuon[i * 5 + j];
			}
		}
	}
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 3; j++) {
			if (youon[i * 3 + j] != null) {
				document.getElementById("youon" + (i * 3 + j)).innerText = youon[i * 3 + j];
			}
		}
	}
}


window.onload = function() {}

function oboe(oboenum) {
	if (oboe_p_text[oboenum] != null) {
		document.getElementById("oboekata_p").innerText = oboe_p_text[oboenum];
		document.getElementById("gana").src = "img/"+ hatsuon[oboenum] +"1.gif";
		document.getElementById("kana").src = "img/"+ hatsuon[oboenum]+".gif";
	}
}
var oboe_p_text = [
	"详解：首字“阿”是假名发音。想这句话时，大脑只需提取出“安了”两字，“安”字稍加变形后，即可得到平假名“あ”；“了”字稍加变形后，就可得到片假名“ア”。",
	"详解：首字“以”是假名发音。想到“以理服人”这个常用词，很容易想起发音“以”，同时提取出“以人”两字，在进行相应转化，即得假名“い　イ”。",
	"详解：“屋”是假名发音。提取“宇”字，去掉“宇”下面的“于”，将剩下的“宀”稍加变换，即得假名“う　ウ'。",
	"详解：首字“爱”是假名发音。想这句时，提取“元工”两字，将“元”变形后可得平假名“え”，“工”即片假名“エ”。",
	"详解：“奥”是假名发音。“奥运求才”很容易理解记忆，提取“求才”两字并将其变形后，即得假名“お　オ”。",
	"详解：“卡”是假名发音。提取“加力”两字，变形后，即得假名“か　カ”。",
	"详解：“Key”是假名发音。“丰”字变形需要特别想象一下。变化“丰”的第三横，即可得平假名“き”；去掉第三横，第二横变长，即可得片假名“キ”。",
	"详解：“哭”是假名发音。提取“久”，“久”的演变需要想象一下。中间渐渐抹去，得到平假名“ く”；去掉最后一笔，即可得片假名“ク”。",
	"详解：“凯”是假名发音。提取“计、介”两字，并稍加变形，，即可得假名“け　ケ”。",
	"详解：“靠”是假名发音。提取“己”，“己”的变形要想象一下，去掉最后一笔，将剩下的部分变形后可得假名“こ　コ”。",
	"详解：“萨”是假名发音。提取“士井”两字，将“士”字的“十”与“一”分离，变形后可得平假名“さ”；“井”去掉一横，变形后即为片假名“サ”。",
	"详解：“王羲之”是我国古代著名书法家，人称“书圣”。“羲”是假名发音。提取“之”，想象一下，将其变形后可得到假名“し　シ”。",
	"详解：“四”是假名发音。提取“寸久”两字，将“寸”变形后可得平假名的“す”，中间的圈是它的独特标记，容易记住；去掉“久”的第一笔，即可得到片假名“ス”。",
	"详解：“赛”是假名发音。提取“世”，去掉最后一笔，变形后可得到平假名“せ”；在“せ”基础上变形，很容易得到片假名“セ”。",
	"详解：“扫”是假名的发音。提取“3关”两字，“3”的变形其实很简单，只要将下面弯进去的反过来弯在外面，变形后可得到平假名‘そ”；将“关”保留“丶丿”，变形后可得片假名“ソ”。",
	"详解：“他”是假名发音。提取“太多”两字，将“太”的第一、第二笔和其余部分分离，变形后可得到平假名“た”；“多”字保留上部，即可得到平假名“タ”。",
	"详解：“器”是假名发音。提取“古千”两字，“古”重点变形下边“口”字，变形后可得到平假名“ち”；将“千”字稍加变形，可得到片假名“チ”。",
	"详解：“刺”是假名发音。提取“3 川”两字，把“3”去掉下部，可轻松得到平假名“つ”；“川”字也容易变形为片假名“ツ”。",
	"详解：“台”是假名发音。提取“7 元”两字，将“7”稍加变形，即可得平假名“て”；“元”去掉最后一笔，可得到片假名“テ”。",
	"详解：“掏”是假名发音。提取“丫卜”两字，“丫”重点变形下边，变形后可得平假名“と”；“卜”可直接得到片假名“ト”。",
	"详解：“那”是假名发音。提取“奈”，将“奈”的下部扭一下，变形后可得平假名“と”；“な”；保留“奈”的开始两笔，即得片假名“ナ”。",
	"详解：“泥”是假名发音。采取了同音字联想，由“人”想到“仁慈”的“仁”，将“仁”稍加变形，可得平假名“に”；保留“仁”右部，可得片假名“ニ”。",
	"详解：“奴”是假名发音。提取“奴”，将“奴”稍加变形，可得到平假名“ぬ”；保留“奴”右部，可得片假名“ヌ”。",
	"详解：“奶”是假名发音。提取“打衣”，而“打”重点变换右部，变形后可得平假名“ね”；“衣”变形后可得片假名“ネ”。",
	"详解：“闹”是假名发音。“奶”与“乃”采用的是同音字联想，“乃”变形后可得平假名“の”；保留“乃”的“丿”，即得片假名“ノ”。",
	"详解：“哈”是假名发音。提取“波八”两字，“波”重点变化右部，变形后可得平假名“は”；“八”直接得片假名“ハ”。",
	"详解：“黑”是假名发音。提取“比”，将“比”变形后可得到平假名“ひ”；将“匕”稍加变化，即得片假名“ヒ”。",
	"详解：“服”是假名发音。提取“不”，将“一”与下部分来，变形后可得到平假名“ふ”；取“不”的第一、第二笔，变形后可得片假名“フ”。",
	"详解：“海”是假名发音。提取“7”，变形后可得到假名“へ　ヘ”。",
	"详解：“好”是假名发音。提取“保”，“保”重点变化右部，变形后可得平假名“ほ”；将“保”中的“木”稍加变形，可得到片假名“ホ”。",
	"详解：“抹”是假名发音。提取“抹了”两字，变化“抹”中“末”的下边，变形后可得平假名“ま”；变形“了”下部，可得到片假名“マ”。",
	"详解：英文“Me”是假名发音。提取“三美”两字，“美”的变形重点是下部，因为“み”的书写比较简单，所以不难变形后得到平假名“み”；”“三”变形后，很容易得到片假名“ミ”。",
	"详解：“母”是假名发音。提取“犬台”两字，“犬”主要变化下部，变形后可得平假名“む”；“台”保留上部，直接得片假名“ム”。",
	"详解：“麦”是假名发音。提取“女士”两字，将“女”稍加变化，可得到平假名“め”；变化“士”中的“十”，变形后可得片假名“メ”。",
	"详解：“毛”是假名发音。提取“毛”，将“毛”第一笔去掉，第三横变短，变化后即得平假名“も”；去掉“毛”第三横，变化后即为片假名“モ”。",
	"详解：“亚”是假名发音。提取“也”，将“也”稍加变形后，可得到平假名“や”和片假名“ヤ”。",
	"",
	"详解：“由”是假名发音。提取“由 2”两字，“由”字变形后可得到平假名“ゆ”；将“2”稍加变化，即得片假名“ユ”。",
	"",
	"详解：“要”是假名发音。提取“与”，变换“与”下部，可得到平假名“よ”；将“与”作整体变化，可得到片假名“ヨ”。",
	"详解：“辣”是假名发音。提取“5 文”两字，“5”稍加变化，很容易得到平假名“ら”；“文”去掉最后一笔，变形后即得片假名“ラ”。",
	"详解：“利”是假名发音。提取“利”，保留“利”的右部，变形后很容易得到平假名“り”和片假名“リ”。",
	"详解：“陆”是假名发音。提取“3 儿”，“3”变形后可得到平假名“る”；将“儿”稍加变形，即得到片假名“ル”。",
	"详解：“来”是假名发音。提取“礼”，重点变化“礼”左边，变形后得平假名“れ”；保留“礼”右边，将其变形后可得到片假名“レ”。",
	"详解：“老”是假名发音。提取“3 口”，“3”变形后可得到平假名“ろ”；将“口”稍加变形，可得到片假名“ロ”。",
	"详解：“娃”是假名发音。提取“打口”两字，将“打”变形后可得到平假名“わ”；“口”变形后可得到片假名“ワ”。",
	"",
	"",
	"",
	"详解：“澳”是假名发音。提取“大于 C(Cuba首字母)”，将“大”和“C”上下组合，可得到平假名“を”；将“于”变形后可得到片假名“ヲ”。",
	"详解：“Hans”（汉斯）中的“n”是假名发音。提取“H(h) 二”，将“h”变形后可得到平假名“ん”；“二”变形后可得到片假名“ン”",
]
