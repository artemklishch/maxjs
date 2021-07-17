const ids = new Set(["Hi", "from", "set!"]);
console.log("ids", ids);
ids.add(2);
console.log("ids", ids);
if (ids.has("Hi")) {
  ids.delete("Hi");
}
console.log("ids", ids);
console.log("ids.entries()", ids.entries());
for (const entry of ids.entries()) {
  console.log(entry[0]);
}

console.log("\n\n\n\n");

let person3 = { name: "Bob" };
const personsAgain = new WeakSet();
personsAgain.add(person3);
person3 = null;
console.log("personsAgain", personsAgain);
