const container = document.querySelector('#container');
let display = document.querySelector('#display');
let currentAction = '';
let firstNum;
let secondNum;
let previousKey = '';

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
    if (display.textContent == '0' || previousKey == 'operationKey' || previousKey == 'calculateKey') {
      display.textContent = `${keyContent}`;
    }
    else {
      display.textContent += `${keyContent}`;
    }
    previousKey = '';
  }

  if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
    // if there's no active currentAction --> assign operation action to currentAction
    // firstNum is the textContent of display
    if (currentAction == '') {
      previousKey = 'operationKey';
      currentAction = action;
      firstNum = display.textContent;
    }
    // if there's a current action, operationKey acts as 'calculate'
    // secondNum is textContent of display
    // reset previousKey & currentAction back to empty ''
    else {
      secondNum = display.textContent;
      result = calculate(firstNum, currentAction, secondNum);
      display.textContent = `${result}`;
      previousKey = 'operationKey';
      currentAction = action;
      firstNum = result;
    }
  }

  if (action === 'calculate') {
    secondNum = display.textContent;
    result = calculate(firstNum, currentAction, secondNum);
    previousKey = 'calculateKey';
    display.textContent = `${result}`;
    currentAction = '';
  }

  if (action === 'clearAll') {
    display.textContent = '0';
    currentAction = '';
  }
}));





