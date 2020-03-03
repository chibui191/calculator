const container = document.querySelector('#container');
let display = document.querySelector('#display');
let activeOperator;
let firstNum;
let secondNum;
let previousKey;

function calculate(n1, operator, n2) {
  if (operator == 'add') {
    result = (+n1) + (+n2);
  } 
  else if (operator == 'subtract') {
    result = (+n1) - (+n2);
  }
  else if (operator == 'multiply') {
    result = (+n1) * (+n2);
  }
  else if (operator == 'divide') {
    result = (+n1) / (+n2);
  }
  return result;
}

const keys = document.querySelectorAll('button');

keys.forEach(key => key.addEventListener('click', e => {
  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.value;
  
  if (!action) {
    if (display.textContent == '0' || previousKey == 'operationKey') {
      display.textContent = `${keyContent}`;
    }
    else {
      display.textContent += `${keyContent}`;
    }
    previousKey = '';
  }

  if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
    previousKey = 'operationKey';
    activeOperator = action;
    firstNum = display.textContent;
  }

  if (action === 'calculate') {
    secondNum = display.textContent;
    result = calculate(firstNum, activeOperator, secondNum);
    previousKey = '';
    display.textContent = `${result}`;
  }

  if (action === 'clearAll') {
    display.textContent = '0';
    activeOperator = '';
  }
}));





