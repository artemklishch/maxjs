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

function add() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}
addBtn.addEventListener("click", add);

function subtract() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBSTR", initialResult, enteredNumber, currentResult);
}
subtractBtn.addEventListener("click", subtract);

function multiply() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("MULT", initialResult, enteredNumber, currentResult);
}
multiplyBtn.addEventListener("click", multiply);

function divide() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIV", initialResult, enteredNumber, currentResult);
}
divideBtn.addEventListener("click", divide);
