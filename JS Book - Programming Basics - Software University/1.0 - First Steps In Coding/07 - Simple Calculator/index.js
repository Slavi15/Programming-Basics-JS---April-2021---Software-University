let firstNum = document.getElementById('firstNum');
let secondNum = document.getElementById('secondNum');
let resultElem = document.getElementById('result');
let button = document.getElementById('button');

function calculate() {
    resultElem.value = Number(firstNum.value) + Number(secondNum.value);
}

button.addEventListener('click', calculate);