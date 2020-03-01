// JavaScript Document
const vdato_element = document.querySelector('.vdato');
const datov_element = document.querySelector('.vdato .datov');
const datoer_element = document.querySelector('.vdato .datoer');
const month_element = document.querySelector('vdato .datoer .month .month2'); 
const nextmonth_element = document.querySelector('vdato .datoer .next'); 
const prevmonth_element = document.querySelector('vdato .datoer .back'); 
const dage_element = document.querySelector('.vdato .datoer .dage');

const month12 = ['Januar','Februar', 'Marts','April','Maj', 'Juni', 'Juli', 'August',
			  'Septemper', 'Oktober', 'November', 'December'];
let dato = new Date();
let dag = dato.getDate();
let month = dato.getMonth();
let year = dato.getFullYear();
let valgtdato = dato;
let valgtdag = dag;
let valgtmonth= month;
let selectedyear = year;

month_element.textContent = month12[month] + ' ' + year;

//listeners 
vdato_element.addEventListener('click', datovtoggle);
nextmonth_element.addEventListener('click', ToNextMonth);

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
