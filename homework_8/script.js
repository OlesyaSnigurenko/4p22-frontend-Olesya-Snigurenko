'use strict'

const resultButton = document.getElementById('button');

resultButton.addEventListener('click', (event) => {
    event.preventDefault();
    const firstNumber = document.getElementById('first-number').value;
    const operator = document.getElementById('operator').value;
    const secondNumber = document.getElementById('second-number').value;
    let result;

    if (firstNumber === '' || String(firstNumber).trim() === '') {
        result = 'Первое число не указано';
        } 
    else if (secondNumber === '' || String(secondNumber).trim() === '') {
        result = 'Второе число не указано';
        }
    else if (isNaN(firstNumber) || isNaN(secondNumber)) {
        result = 'Число указано не верно';
        }
    else if (secondNumber === '0' && operator === '/') {
        result = 'Операция не корректна';
        }
    else {
    switch (operator) {
        case '': {
            result = 'Не введён знак';break;
            }
        case '+': {
            result = Number(firstNumber) + Number(secondNumber);break;
            }
        case '-': {
            result = Number(firstNumber) - Number(secondNumber);break;
            }
        case '*': {
            result = Number(firstNumber) * Number(secondNumber);break;
            }
        case '/': {
            result = Number(firstNumber) / Number(secondNumber);break;
            }
        default: {
            result = 'Программа не поддерживает такую операцию';
            }
        }   
    }
    if (
        isNaN(result) || Number.isInteger(result)
      ) {
        console.log(result);
        document.getElementById('result').innerHTML = result;
      } else {
        console.log(result);
        document.getElementById('result').innerHTML = Number(result.toFixed(7));
      }
}
)