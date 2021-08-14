// class Person {
//   name = "Bob";
//   constructor() {
//     this.age = 30;
//   }
//   greet() {
//     console.log(
//       "Hi, my name is " + this.name + " and I am " + this.age + " yeasr old."
//     );
//   }
// }

function Person() {
  this.name = "Bob";
  this.age = 30;
  this.greet = function () {
    console.log(
      "Hi, my name is " + this.name + " and I am " + this.age + " yeasr old."
    );
  };
}
const person = new Person();
person.greet();
//ghfgdhfghfghfg