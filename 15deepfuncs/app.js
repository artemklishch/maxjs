// pure/inpure functions
console.log("pure/inpure functions");
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 5));

function addRandom(num1) {
  return num1 + Math.random();
}
console.log(addRandom(5));

let previuosResult = 0;
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previuosResult = sum;
  return sum;
}
console.log(addMoreNumbers(1, 5), previuosResult);

const hobbies = ["sport", "cooking"];

function printHobbies(h) {
  hobbies.push("NEW HOBBY");
  console.log(h);
}
printHobbies(hobbies);

// factory functions
console.log("\n", "factory functions");
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}
const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTax = createTaxCalculator(0.25);
console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

// closures
console.log("\n", "closures");

