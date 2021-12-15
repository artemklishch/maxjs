// export { }; // це потрібно, щоб відключити помилку - Cannot redeclare block-scoped variable

// class User {
//   name: string
//   private age: number
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }


interface Greetable {
  name: string
}
interface Printable {
  print(): void
}
class User implements Greetable, Printable {
  constructor(public name: string, private age: number) { }
  print(): void {
    console.log(this.name);
  }
}

// class User {
//   constructor(public name: string, private age: number) { }
// }
class Admin extends User {
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age)
  }
}
const user = new User('Bob', 30)
// console.log(user.name, user.age);


const numOneInput = document.getElementById('num1') as HTMLInputElement;
const numTwoInput = <HTMLInputElement>document.getElementById('num2')
const addButton = document.querySelector('button')!

function sumNumbers(a: number, b: number) {
  return a + b;
}
enum OutputMode { CONSOLE, ALERT }
function printRes(result: number, printMode: OutputMode) {
  if (printMode === OutputMode.CONSOLE) {
    console.log(result);
  } else if (printMode === OutputMode.ALERT) {
    alert(result)
  }
}

interface CalculationContainer {
  res: number,
  print(): void
}
type CalculationResults = CalculationContainer[]

const resultsArr: Array<CalculationContainer> = [];
// const resultsArr: Array<any> = [];
// const resultsArr: CalculationResults = [];

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
  printRes(result, OutputMode.CONSOLE)
  printRes(result, OutputMode.ALERT)
})



function logEndEcho<T>(val: T) {
  console.log(val);
  return val
}
logEndEcho<string>('Hi, There!').split(' ')