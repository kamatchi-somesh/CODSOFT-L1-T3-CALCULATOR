const display = document.querySelector('#currentCalculation');
const historyContainer = document.querySelector('.history-container');
let currentNumber = '0';
let previousNumber = '';
let operator = '';
let fullExpression = '';
let history = [];

function appendNumber(number) {
  if (currentNumber === '0') {
    currentNumber = number;
    fullExpression = currentNumber;
  } else {
    currentNumber += number;
    fullExpression += number;
  }
  display.textContent = currentNumber;
}

function appendOperator(newOperator) {
  if (previousNumber !== '') {
    performCalculation();
  }
  operator = newOperator;
  previousNumber = currentNumber;
  currentNumber = '0';
  fullExpression += ` ${operator} `;
  display.textContent = currentNumber;
}

function appendDecimal() {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    fullExpression += '.';
    display.textContent = currentNumber;
  }
}

function performCalculation() {
  const result = eval(previousNumber + operator + currentNumber);
  display.textContent = result;
  const calculation = `${previousNumber} ${operator} ${currentNumber} = ${display.textContent}`;
  history.push(calculation);
  currentNumber = result;
  showHistory();
  fullExpression = '';
}

function showHistory() {
  historyContainer.innerHTML = '';
  history.forEach(calculation => {
    const p = document.createElement('p');
    p.textContent = calculation;
    historyContainer.appendChild(p);
  });
}

function clearCalculation() {
  currentNumber = '0';
  previousNumber = '';
  operator = '';
  fullExpression = '';
  display.textContent = currentNumber;
}



function eraseLastDigit() {
  currentNumber = currentNumber.slice(0, -1);
  display.textContent = currentNumber || '0';
}

function calculate() {
  performCalculation();
  previousNumber = '';
  operator = '';
  fullExpression = '';
}
