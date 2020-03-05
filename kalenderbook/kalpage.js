// JavaScript Document
const vdato_element = document.querySelector('.vdato');
const datov_element = document.querySelector('.vdato .datov');
const datoer_element = document.querySelector('.vdato .datoer');
const month_element = document.querySelector('.vdato .datoer .month .month2'); 
const nextmonth_element = document.querySelector('.vdato .datoer .next'); 
const prevmonth_element = document.querySelector('.vdato .datoer .back'); 
const dage_element = document.querySelector('.vdato .datoer .dage');

const month12 = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

month_element.textContent = month12[month] + ' ' + year;


datov_element.textContent = formatDate(date);
datov_element.dataset.value = selectedDate;

indsatteDatøer();


//listeners 
vdato_element.addEventListener('click', datovtoggle);
nextmonth_element.addEventListener('click', ToNextMonth);
prevmonth_element.addEventListener('click', ToPrevMonth);
//functions









function datovtoggle(e) {
	if (!checkEventPathForClass(e.path, 'datoer')) { //if not
	datoer_element.classList.toggle('active');
}
	}
function ToNextMonth(e) {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	month_element.textContent = month12[month] + ' ' + year;
	indsatteDatøer();
}
function ToPrevMonth (e) {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	month_element.textContent = month12[month] + ' ' + year;
	indsatteDatøer();
}
function indsatteDatøer (e) {
	dage_element.innerHTML = ''; //clear dagende efter ver gang der klikkes next eller prev
	let antaldage = 31;
//if statements der sørger for at det rette antal dage er ved hver måned kan også gøres em,d switch statement
	if (month == 1) {
		antaldage = 28;
	}
	if (month == 3) {
		antaldage = 30;
	}
	if (month == 5) {
		antaldage = 30;
	}
	if (month == 8) {
		antaldage = 30;
	}
	if (month == 10) {
		antaldage = 30;
	}
	
for (let i = 0; i < antaldage; i++) {
		const dag_element = document.createElement('div');
		dag_element.classList.add('day');
		dag_element.textContent = i + 1;

		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
			dag_element.classList.add('selected');
		}

		dag_element.addEventListener('click', function () {
			selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
			selectedDay = (i + 1);
			selectedMonth = month;
			selectedYear = year;

			datov_element.textContent = formatDate(selectedDate);
			datov_element.dataset.value = selectedDate;

			indsatteDatøer();
		});

		dage_element.appendChild(dag_element);
	}
}
//check funtion . tjekker vejen  

function checkEventPathForClass(path, selector) {
	for (let i = 0; i < path.length; i++) {
		if (path[i].classList && path[i].classList.contains(selector)) {
			return true;
		}
	}
	return false;
	
}



function formatDate (d) {
	let day = d.getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}

	let year = d.getFullYear();

	return day + ' - ' + month + ' - ' + year;
}