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

let userName = "Max";

function greetName() {
  let name = userName;
  return "Hi, " + name;
  // return "Hi, " + userName;
}
userName = "Manuel";
console.log(greetName());

console.log("\n", "recoursion");

// function powerOf(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOf(x, n) {
  // if (n === 1) {
  //   return x;
  // } else return x * powerOf(x, n - 1);
  return n === 1 ? x : x * powerOf(x, n - 1);
}
console.log(powerOf(2, 3)); // 2*2*2
// n = 3
// 1. return powerOf(x, 3 - 1)
// n = 2
// 2. return powerOf(x, 2 - 1)
// n = 1
// 2. return 2

const mySelf = {
  name: "Max",
  friends: [
    {
      name: "mmanuel",
      friends: [
        {
          name: "Chris",
          friends: [
            {
              name: "Hari",
            },
            {
              name: "Amilia",
            },
          ],
        },
      ],
    },
    {
      name: "Julia",
    },
  ],
};
const printFriendNames = (person) => {
  const collectedNames = [];
  if (!person.friends) return [];
  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...printFriendNames(friend));
  }
  return collectedNames;
};
console.log("printFriendNames", printFriendNames(mySelf));
