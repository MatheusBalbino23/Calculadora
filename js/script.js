const display = document.getElementById('display');
const clearBtn = document.getElementById('clear');
const calculateBtn = document.getElementById('calculate');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');

let currentNumber = '';
let firstOperand = null;
let operator = null;

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        currentNumber += button.textContent;
        display.value = currentNumber;
    });
});

operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (operator !== null) {
            calculate();
        }
        firstOperand = parseFloat(currentNumber);
        operator = button.textContent;
        currentNumber = '';
    });
});

calculateBtn.addEventListener('click', calculate);

clearBtn.addEventListener('click', () => {
    currentNumber = '';
    firstOperand = null;
    operator = null;
    display.value = '';
});

function calculate() {
    if (operator === null || firstOperand === null || currentNumber === '') {
        return;
    }
    const secondOperand = parseFloat(currentNumber);
    let result;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
    }
    display.value = result;
    currentNumber = result.toString();
    firstOperand = result;
    operator = null;
}
