/**
 * Computational results
 * @version 1.0.0
 */

 const gradeArray = [
 	100,
	95,
	90,
	85,
	80,
	78,
	76,
	74,
	72,
	70,
	68,
	66,
	64,
	62,
	60,
	50,
	40,
	30,
	20,
	10
 ]

/**
 * 综合计算
 */
function check() {
	var a = IBM();
	var b = lungCapacity();
	var c = fifyMetre();
	var d = standingLongJump();
	var f = thousandMetre();
	var g = zwtqq();
	var h = ytxsOrywqz();
	var grade = (15 * a + 15 * b + 20 * c + 10 * f + 10 * g + 10 * d + 20 * h)/100;
	document.getElementById('totalScore').innerText = grade.toFixed(1);
}

/**
 * IBM计算
 */
function IBM() {
	// 身高
	var height = document.getElementById('height').value / 100;
	// 体重
	var weight = document.getElementById('weight').value;
	// 如果为空
	if(height == '' || weight == ''){
		document.getElementById('IBM').innerText = 0;
		document.getElementById('IBMGrade').innerText = 0;
		return 0;
	}
	// IBM
	var IBM = weight / (height * height);
	// 设置IBM
	document.getElementById('IBM').innerText = IBM.toFixed(3);
	// 计算分数
	var grade;
	switch(getInFo()) {
		case 1:
		case 2:
			// 男生
			if (IBM <= 14.1) {
				grade = 80;
			} else if (IBM > 14.2 && IBM < 20.8) {
				grade = 100;
			} else if (IBM >= 20.9 && IBM < 23.6) {
				grade = 80;
			} else if (IBM >= 23.7) {
				grade = 60;
			}
			break;
		case 3:
		case 4:
			// 女生
			if (IBM <= 17.1) {
				grade = 80;
			} else if (IBM > 17.1 && IBM <= 23.9) {
				grade = 100;
			} else if (IBM > 23.9 && IBM <= 27.9) {
				grade = 80;
			} else if (IBM > 27.9) {
				grade = 60;
			}
			break;
	}
	document.getElementById('IBMGrade').innerText = grade;
	return grade;
}

/**
 * 一分钟跳绳计算
 */
function standingLongJump() {
	var value = document.getElementById('standingLongJump').value;
	if(value == ''){
		document.getElementById('standingLongJumpGrade').innerText = 0;
		return 0;
	}
	var standard1 = [
		157,
		152,
		147,
		141,
		135,
		128,
        121,
		114,
		107,
		100,
		93,
		86,
		79,
		72,
		65,
		62,
		59,
		56,
		53,
		50
	];
	var standard2 = [
		166,
		159,
		152,
		144,
		136,
		129,
		122,
		115,
		108,
		101,
		94,
		87,
		80,
		73,
		66,
		63,
		60,
		57,
		54,
		51
	];
	var standard3 = [];
	var standard4 = [];
	if(getInFo()==2 && value>166){
		var fu=parseInt((value-166)/2);
	}else if(getInFo()==1 && value>157){
		var fu=parseInt((value-157)/2);
	}else{
		var fu=0;
	}
	var grade = upCalculateScore(value, standard1, standard2, standard3, standard4, fu);
	if(getInFo()==2 && value>166){
		document.getElementById('standingLongJumpGrade').innerText = grade-(grade-100)/10*9;
	}else if(getInFo()==1 && value>157){
		document.getElementById('standingLongJumpGrade').innerText = grade-(grade-100)/10*9;
	}else{
		document.getElementById('standingLongJumpGrade').innerText = grade;
	}
	
	return grade;
}

/**
 * 肺活量计算
 */
function lungCapacity() {
	var value = document.getElementById('lungCapacity').value;
	if(value == ''){
		document.getElementById('lungCapacityGrade').innerText = 0;
		return 0;
	}
	var standard1 = [
		3200,
3100,
3000,
2750,
2500,
2400,
2300,
2200,
2100,
2000,
1900,
1800,
1700,
1600,
1500,
1410,
1320,
1230,
1140,
1050
	];
	var standard2 = [
		2500,
2400,
2300,
2200,
2100,
2010,
1920,
1830,
1740,
1650,
1560,
1470,
1380,
1290,
1200,
1170,
1140,
1110,
1080,
1050
	];
var standard3 = []
var standard4 = []
	var grade = upCalculateScore(value, standard1, standard2, standard3, standard4);
	document.getElementById('lungCapacityGrade').innerText = grade;
	return grade;
}

/**
 * 50米跑计算
 */
function fifyMetre() {
	var value = document.getElementById('50metre').value;
	if(value == ''){
		document.getElementById('50metreGrade').innerText = 0;
		return 0;
	}
	var standard1 = [
		8.2,
		8.3,
		8.4,
		8.5,
		8.6,
		8.8,
		9,
		9.2,
		9.4,
		9.6,
		9.8,
		10,
		10.2,
		10.4,
		10.6,
		10.8,
		11,
		11.2,
		11.4,
		11.6
	];
	var standard2 = [
		8.2,
		8.3,
		8.4,
		8.7,
		9,
		9.2,
		9.4,
		9.6,
		9.8,
		10,
		10.2,
		10.4,
		10.6,
		10.8,
		11,
		11.2,
		11.4,
		11.6,
		11.8,
		12
	];
	var standard3 = [];
	var standard4 = [];
	var grade = downCalculateScore(value, standard1, standard2, standard3, standard4);
	document.getElementById('50metreGrade').innerText = grade;
	return grade;
}


/**
 * 50×8往返跑计算
 */
function thousandMetre() {
	var min = document.getElementById('1000MetreMinutes').value;
	var sec = document.getElementById('1000MetreSecond').value;
	// 1 * min是将min转为int类型
	var value = 1 * min + 0.01 * sec;
	if(value == 0){
		document.getElementById('1000MetreGrade').innerText = 0;
		return 0;
	}
	var standard1 = [
		1.30,
		1.33,
		1.36,
		1.39,
		1.42,
		1.45,
		1.48,
		1.51,
		1.54,
		1.57,
		2.00,
		2.03,
		2.06,
		2.09,
		2.12,
		2.16,
		2.20,
		2.24,
		2.28,
		2.32
	];
	var standard2 = [
		1.37,
		1.40,
		1.43,
		1.46,
		1.49,
		1.52,
		1.55,
		1.58,
		2.01,
		2.04,
		2.07,
		2.10,
		2.13,
		2.16,
		2.19,
		2.23,
		2.27,
		2.31,
		2.35,
		2.39
	];
	var standard3 = [];
	var standard4 = [];
	var grade = downCalculateScore(value, standard1, standard2, standard3, standard4);
	document.getElementById('1000MetreGrade').innerText = grade;
	return grade;
}

/**
 * 坐位体前屈计算
 */
function zwtqq() {
	var value = document.getElementById('zwtqq').value;
	if(value == 0){
		document.getElementById('zwtqqGrade').innerText = 0;
		return 0;
	}
	var standard1 = [
		16.6,
		15.3,
		14,
		11.5,
		9,
		7.7,
		6.4,
		5.1,
		3.8,
		2.5,
		1.2,
		-0.1,
		-1.4,
		-2.7,
		-4,
		-5,
		-6,
		-7,
		-8,
		-9
	];
	var standard2 = [
		19.9,
		18.7,
		17.5,
		15.2,
		12.9,
		11.8,
		10.7,
		9.6,
		8.5,
		7.4,
		6.3,
		5.2,
		4.1,
		3,
		1.9,
		1.1,
		0.3,
		-0.5,
		-1.3,
		-2.1
	];
	var standard3 = [];
	var standard4 = [];
	var grade = upCalculateScore(value, standard1, standard2, standard3, standard4);
	document.getElementById('zwtqqGrade').innerText = grade;
	return grade;
}

/**
 * 仰卧起坐计算
 */
function ytxsOrywqz() {
	var value = document.getElementById('ytxs').value;
	if(value == 0){
		document.getElementById('ytxsGrade').innerText = 0;
		return 0;
	}
	var standard1 = [
		51,
		48,
		45,
		42,
		39,
		37,
		35,
		33,
		31,
		29,
		27,
		25,
		23,
		21,
		19,
		17,
		15,
		13,
		11,
		9
	];
	var standard2 = [
		49,
		47,
		45,
		42,
		39,
		37,
		35,
		33,
		31,
		29,
		27,
		25,
		23,
		21,
		19,
		17,
		15,
		13,
		11,
		9
	];
	var standard3 = [];
	var standard4 = [];
	var grade = upCalculateScore(value, standard1, standard2, standard3, standard4);
	document.getElementById('ytxsGrade').innerText = grade;
	return grade;
}


/**
 * 性别改变
 */
function sexChange() {
	check()
}

/**
 * 年纪改变
 */
function gradeChange() {
	check()
}

/**
 * 获取评分标准
 */
function getInFo() {
	if (document.getElementById('grade').value == 1) {
		if (document.getElementById('gender').value == 1) {
			// 男生
			return 1;
		} else {
			// 女生
			return 2;
		}
	} 
	
}

/**
 * 计算分数
 */
function upCalculateScore(value, standard1, standard2, standard3, standard4, fujia=0) {
	var grade = 0;
	switch(getInFo()) {
		case 1:
			// 男生
			for (var i = 0; i <= 19; i++) {
				if (value >= standard1[i]) {
					grade = gradeArray[i]+fujia*10;
					break;
				}
			}
			break;
		case 2:
			// 女生
			for (var i = 0; i <= 19; i++) {
				if (value >= standard2[i]) {
					grade = gradeArray[i]+fujia*10;
					break;
				}
			}
			break;
		default :
			grade = 0;
	}
	console.log(grade);
	return grade;
}

/**
 * 计算分数
 */
function downCalculateScore(value, standard1, standard2, standard3, standard4, fujia=0) {
	var grade = 0;
	switch(getInFo()) {
		case 1:
			// 男生
			for (var i = 0; i <= 19; i++) {
				if (value <= standard1[i]) {
					grade = gradeArray[i]+fujia*10;
					break;
				}
			}
			break;
		case 2:
			// 女生
			for (var i = 0; i <= 19; i++) {
				if (value <= standard2[i]) {
					grade = gradeArray[i]+fujia*10;
					break;
				}
			}
			break;
		default :
			grade = 0;
	}
	console.log(grade);
	return grade;
}
