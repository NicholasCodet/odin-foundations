const display = document.getElementById("display");
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let shouldResetDisplay = false;

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalsButton = document.getElementById("equals");

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);
operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperator(button.textContent))
);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteLast);
equalsButton.addEventListener("click", evaluate);

function appendNumber(number) {
  if (display.value === "0" || shouldResetDisplay) {
    display.value = number;
    shouldResetDisplay = false;
  } else {
    if (number === "." && display.value.includes(".")) return;
    display.value += number;
  }
}

function setOperator(operator) {
  if (currentOperator !== null) evaluate();
  firstOperand = display.value;
  currentOperator = operator;
  shouldResetDisplay = true;
}

function evaluate() {
  if (currentOperator === null || shouldResetDisplay) return;
  secondOperand = display.value;

  const a = parseFloat(firstOperand);
  const b = parseFloat(secondOperand);
  if (currentOperator === "/" && b === 0) {
    display.value = "Error";
    return;
  }

  let result;
  switch (currentOperator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
  }

  display.value = Math.round(result * 10000) / 10000;
  currentOperator = null;
}

function clear() {
  display.value = "0";
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  shouldResetDisplay = false;
}

function deleteLast() {
  if (shouldResetDisplay || display.value === "Error") {
    clear();
  } else {
    display.value = display.value.slice(0, -1) || "0";
  }
}
