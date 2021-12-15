// export { }; // це потрібно, щоб відключити помилку - Cannot redeclare block-scoped variable
var numOneInput = document.getElementById('num1');
var numTwoInput = document.getElementById('num2');
var addButton = document.querySelector('button');
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
var resultsArr = [];
var names = ['Bob'];
addButton.addEventListener('click', function () {
    var num1 = +numOneInput.value;
    var num2 = +numTwoInput.value;
    var result = sumNumbers(num1, num2);
    var resultContainer = {
        res: result,
        print: function () {
            console.log(this.res);
        }
    };
    resultsArr.push(resultContainer);
    // resultsArr.push(56)
    // printRes(result, 'console')
    // printRes(result, 'alert')
    // resultsArr[0].print()
    printRes(result, OutputMode.CONSOLE);
    printRes(result, OutputMode.ALERT);
});
