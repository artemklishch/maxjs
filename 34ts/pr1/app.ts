// export { }; // це потрібно, щоб відключити помилку - Cannot redeclare block-scoped variable
const numOneInput = document.getElementById('num1') as HTMLInputElement;
const numTwoInput = <HTMLInputElement>document.getElementById('num2')
const addButton: HTMLButtonElement = document.querySelector('button')

function sumNumbers(a: number, b: number) {
  return a + b;
}
type PrintMode = 'console' | 'alert'
enum OutputMode { CONSOLE, ALERT }
function printRes(result, printMode: OutputMode) {
  if (printMode === OutputMode.CONSOLE) {
    console.log(result);
  } else if (printMode === OutputMode.ALERT) {
    alert(result)
  }
}
// function printRes(result, printMode: PrintMode) {
//   if (printMode === 'console') {
//     console.log(result);
//   } else if (printMode === 'alert') {
//     alert(result)
//   }
// }
// const result = add(5, 3);
// printResult(result);

type CalculationResults = { res: number, print: () => void }[]

let resultsArr: CalculationResults = [];
const names = ['Bob']

addButton.addEventListener('click', () => {
  const num1 = +numOneInput.value
  const num2 = +numTwoInput.value
  const result = sumNumbers(num1, num2)
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res);
    }
  }
  resultsArr.push(resultContainer)
  // resultsArr.push(56)
  // printRes(result, 'console')
  // printRes(result, 'alert')
  // resultsArr[0].print()
  printRes(result, OutputMode.CONSOLE)
  printRes(result, OutputMode.ALERT)
})