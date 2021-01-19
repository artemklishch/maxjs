const defaultValue = 0;
let currentResult = defaultValue;
const logEntries = [];

function getUserInputNumber() {
  return parseFloat(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifyer,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operator: operationIdentifyer,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
}

function calculateResult(e) {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  let mathOperatyor = e.target.innerHTML;
  let calcType;
  if (mathOperatyor === "+") {
    currentResult += enteredNumber;
    calcType = "ADD";
  } else if (mathOperatyor === "-") {
    currentResult -= enteredNumber;
    calcType = "SUBSTR";
  } else if (mathOperatyor === "*") {
    currentResult *= enteredNumber;
    calcType = "MULT";
  } else if (mathOperatyor === "/") {
    currentResult /= enteredNumber;
    calcType = "DIV";
  }
  createAndWriteOutput(mathOperatyor, initialResult, enteredNumber);
  writeToLog(calcType, initialResult, enteredNumber, currentResult);
}
btnsBlock.addEventListener("click", calculateResult);

// function add() {
//   calculateResult("ADD");
// }
// addBtn.addEventListener("click", add);

// function subtract() {
//   calculateResult("SUBSTR");
// }
// subtractBtn.addEventListener("click", subtract);

// function multiply() {
//   calculateResult("MULT");
// }
// multiplyBtn.addEventListener("click", multiply);

// function divide() {
//   calculateResult("DIV");
// }
// divideBtn.addEventListener("click", divide);
