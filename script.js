let burger = document.querySelector('.burger');


let bars1 = document.querySelector('.bars1');
let bars2 = document.querySelector('.bars2');
let bars3 = document.querySelector('.bars3');
let bars4 = document.querySelector('.bars4');




burger.addEventListener('click', function(){
	bars1.classList.toggle('change');
	bars2.classList.toggle('change');
	bars3.classList.toggle('change');
	bars4.classList.toggle('change');
});