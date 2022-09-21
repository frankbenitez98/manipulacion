const h1 = document.querySelector('.titulos');
const i1 = document.querySelector('#calculo1');
const i2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
btn.addEventListener('click', btnOnClick);
function btnOnClick(){
    result.innerText = i1.value + i2.value; 

}

