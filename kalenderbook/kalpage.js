// JavaScript Document
const vdato_element = document.querySelector('.vdato');
const datov_element = document.querySelector('.vdato .datov');
const datoer_element = document.querySelector('.vdato .datoer');


//listeners 
vdato_element.addEventListener('click', datovtoogle);

//functions

function datovtoogle (e) {
	datoer_element.classList.toogle('active');
}
