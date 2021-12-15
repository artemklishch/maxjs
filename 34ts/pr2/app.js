"use strict";
// export { }; // це потрібно, щоб відключити помилку - Cannot redeclare block-scoped variable
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(this.name);
    }
}
// class User {
//   constructor(public name: string, private age: number) { }
// }
class Admin extends User {
    constructor(name, age, permissions) {
        super(name, age);
        this.permissions = permissions;
    }
}
const user = new User('Bob', 30);
// console.log(user.name, user.age);
const numOneInput = document.getElementById('num1');
const numTwoInput = document.getElementById('num2');
const addButton = document.querySelector('button');
function sumNumbers(a, b) {
    return a + b;
}
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
function printRes(result, printMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    }
    else if (printMode === OutputMode.ALERT) {
        alert(result);
    }
}
const resultsArr = [];
// const resultsArr: Array<any> = [];
// const resultsArr: CalculationResults = [];
addButton.addEventListener('click', () => {
    const num1 = +numOneInput.value;
    const num2 = +numTwoInput.value;
    const result = sumNumbers(num1, num2);
    const resultContainer = {
        res: result,
        print() {
            console.log(this.res);
        }
    };
    resultsArr.push(resultContainer);
    printRes(result, OutputMode.CONSOLE);
    printRes(result, OutputMode.ALERT);
});
function logEndEcho(val) {
    console.log(val);
    return val;
}
logEndEcho('Hi, There!').split(' ');
