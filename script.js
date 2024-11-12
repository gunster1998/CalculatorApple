let numberDisplay = '0';
let oneOperator = null;
let twoOperator = null;
let operandOne = null;
let operandTwo = null;
let result = null;


const buttons = document.querySelectorAll('div.contentCalsulator > button');

function updateDisplay() {
    const display = document.querySelector('.displayCalculator');
    display.innerText = numberDisplay.replace('.',',');
}

function clickButtons() {
    for (let i = 0; i < buttons.length; i++) {
        console.log(buttons[i])
        buttons[i].addEventListener('click', function () {
            if (buttons[i].classList.contains('erase')) {
                wipeCalculator();
                updateDisplay();
            } else if (buttons[i].classList.contains('toggleOperator')) {
                changeSign();
                updateDisplay();
            } else if (buttons[i].classList.contains('operatorPercent')) {
                percentToNumber();
                updateDisplay();
            } else if (buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value)
                updateDisplay();
            } else if (buttons[i].classList.contains('operand')) {
                inputOparand(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].classList.contains('equally')) {
                countResult();
                updateDisplay();
            }
        })
    }
}
 
function changeSign(){
    numberDisplay = (numberDisplay * -1).toString();
}

function percentToNumber() {
    numberDisplay = (parseFloat(numberDisplay) / 100).toString();
}
function inputOperator(operator){
    if (oneOperator === null) {
        oneOperator = operator;
        operandOne = parseFloat(numberDisplay.replace(',','.'));
        numberDisplay = '0';
    } else if (result !== null){
        oneOperator = operator;
        operandOne = parseFloat(result.replace(',','.'));
        numberDisplay = '0';
    } else {
        countResult();
        oneOperator = operator;
        operandOne = parseFloat(numberDisplay.replace(',','.'));
        
    }

}

function inputOparand(operand) {
    if (result !== null) {
        numberDisplay = operand;
        result = null
    } else if (numberDisplay === '0' && operand !== ',') {
        numberDisplay = operand;
    } else {
        numberDisplay = numberDisplay + operand
    }

    if (numberDisplay > 7){
        numberDisplay = numberDisplay.substring(0,7)
    }
}

function countResult() {
    operandTwo = parseFloat(numberDisplay.replace(',','.'));

    if (oneOperator === '/'){
        result = (operandOne / operandTwo).toString();
        numberDisplay = result;
    } else if (oneOperator === '*') {
        result = (operandOne * operandTwo).toString();
        numberDisplay = result;
    } else if (oneOperator === '-') {
        result = (operandOne - operandTwo).toString();
        numberDisplay = result;
    } else if (oneOperator === '+') {
        result = (operandOne + operandTwo).toString();
        numberDisplay = result;
    }

    
    if (numberDisplay.length > 7){
        numberDisplay = numberDisplay.substring(0,7)
    }
}


function wipeCalculator() {
    numberDisplay = '0';
    oneOperator = null;
    twoOperator = null;
    operandOne = null;
    operandTwo = null;
    result = null;
}


clickButtons();