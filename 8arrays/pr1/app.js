const arr1 = [1];
const arr2 = Array(1);
const arr3 = new Array(1);
const arr4 = Array("Hi");
const arr5 = new Array("Hi");
console.log("object", arr1);
console.log("object", arr2);
console.log("object", arr3);
console.log("object", arr4);
console.log("object", arr5);
console.log("\n");
const arr6 = Array.of(1, 2, 3, 4, 5);
const arr7 = Array.from(1);
const arr8 = Array.of("Hi", "rt");
const arr9 = Array.from("Hi");
console.log("object", arr6);
console.log("object", arr7);
console.log("object", arr8);
console.log("object", arr9);

const listItems = document.querySelectorAll("li");
console.log("listItems", listItems);

const arr10 = Array.from(listItems);
console.log("arr10", arr10);
