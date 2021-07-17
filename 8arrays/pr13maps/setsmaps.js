// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);
// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

const person1 = { name: "Max" };
const person2 = { name: "Manuel" };

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);
console.log("personData", personData);
// это странно, но здесь отображается информация с учетом того, что написано ниже
// на строке 20, где мы добавляем еще данные
// как будто метод объекта Map, примененный ниже, считывает весь код до начала выполнения

personData.set(person2, [{ date: "two weeks ago", price: 100 }]);
console.log("personData", personData);
console.log("personData.get(person1)", personData.get(person1));
for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}

console.log(personData.size);

console.log("\n\n\n\n");
let person3 = { name: "Bob" };
const personsAgain = new WeakMap();
personsAgain.set(person3, "Extra info");
person3 = null;
console.log("personsAgain", personsAgain);
