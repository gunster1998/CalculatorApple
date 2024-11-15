let numberDisplay = '0';
let currentOperator = null;
let operandOne = null;
let operandTwo = null;
let result = null;


const buttons = document.querySelectorAll('div.contentCalсulator > button');

function updateDisplay() {
    const display = document.querySelector('.displayCalculator');
    if (numberDisplay.length > 7) {
        numberDisplay = numberDisplay.substring(0, 7);
    }
    display.innerText = numberDisplay.replace('.', ',');
}

function clickButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            handleButtonClick(buttons[i]);
            updateDisplay();
        })
    }
}

function hasClass (button,className) {
    return button.classList.contains(className)
}

function handleButtonClick(button) {
    switch (true) {
        case hasClass(button, 'erase'):
            wipeCalculator();
            break;
        case hasClass(button, 'toggleOperator'):
            changeSign();
            break;
        case hasClass(button, 'operatorPercent'):
            percentToNumber();
            break;
        case hasClass(button, 'operator'):
            inputOperator(button.value);
            break;
        case hasClass(button, 'operand'):
            inputOperand(button.value);
            break;
        case hasClass(button, 'equally'):
            countResult();
            break
    }
}


function changeSign() {
    numberDisplay = (numberDisplay * -1).toString();
}

function percentToNumber() {
    numberDisplay = (parseFloat(numberDisplay) / 100).toString();
}
function inputOperator(operator) {
    if (currentOperator === null) {
        currentOperator = operator;
    } else if (result !== null) {
        currentOperator = operator;
    } else {
        countResult();
        currentOperator = operator;
    }
    operandOne = prepareNumberDisplay();
}

function inputOperand(operand) {
    if (result !== null) {
        numberDisplay = operand;
        result = null;
    } else if (numberDisplay === '0' && operand !== ',' || parseFloat(numberDisplay) === operandOne) {
        numberDisplay = operand;
    } else {
        numberDisplay = numberDisplay + operand;
    }


}
function prepareNumberDisplay() {
    return parseFloat(numberDisplay.replace(',', '.'));
}

function countResult() {
    operandTwo = prepareNumberDisplay();

    if (result) {
        numberDisplay = result;
        return;
    }

    switch (currentOperator) {
        case "/":
            if (operandTwo === 0) {
                wipeCalculator();
                numberDisplay = "Нельзя!";
            } else {
                result = (operandOne / operandTwo).toString();
                numberDisplay = result;
            }
            break;
        case '*':
            result = (operandOne * operandTwo).toString();
            numberDisplay = result;
            break;
        case '-': 
            result = (operandOne - operandTwo).toString();
            numberDisplay = result;
            break;
        case '+': 
            result = (operandOne + operandTwo).toString();
            numberDisplay = result;
            break;
    }
    currentOperator = null;
}


function wipeCalculator() {
    numberDisplay = '0';
    currentOperator = null;
    operandOne = null;
    operandTwo = null;
    result = null;
}


clickButtons();




// if (currentOperator === '/'){
//     if (operandTwo === 0) {
//         wipeCalculator();
//         numberDisplay = "Нельзя!"
//     } else {
//         result = (operandOne / operandTwo).toString();
//         numberDisplay = result;
//     }
// } else if (currentOperator === '*') {
//     result = (operandOne * operandTwo).toString();
//     numberDisplay = result;
// } else if (currentOperator === '-') {
//     result = (operandOne - operandTwo).toString();
//     numberDisplay = result;
// } else if (currentOperator === '+') {
//     result = (operandOne + operandTwo).toString();
//     numberDisplay = result;
// }