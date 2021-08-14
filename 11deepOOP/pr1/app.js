class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}
class Person extends AgedPerson {
  name = "Bob";
  constructor() {
    super();
    this.age = 30;
  }
  // в этом случае метод прикрепляется как свойство создаваемого объекта
  // поэтому в этом случае this  не теряет контекст, как в другом случае
  // greet = () => {
  //   console.log(
  //     "Hi, my name is " + this.name + " and I am " + this.age + " yeasr old."
  //   );
  // };

  // в этом случае метод прикрепляется на прототип и его нет как метода создаваемого объекта
  greet() {
    console.log(
      "Hi, my name is " + this.name + " and I am " + this.age + " yeasr old."
    );
  }
}

// function Person() {
//   // console.log('object', this)
//   this.name = "Bob";
//   this.age = 30;
//   this.greet = function () {
//     console.log(
//       "Hi, my name is " + this.name + " and I am " + this.age + " yeasr old."
//     );
//   };
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };
// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// Person.describe = function () {
//   console.log("Creating persons...");
// };

// const person = new Person();
// // person.greet();
// console.dir(person);
// console.dir(Person);
// // console.log(person.__proto__ === Person.prototype);
// const p2 = new person.__proto__.constructor();
// console.log("p2", p2);

// console.log(Object.prototype);

// const p = new Person();
// const p2 = new Person();
// console.log("p", p);

// const btn = document.getElementById("btn");
// // btn.addEventListener("click", p.greet.bind(p));
// btn.addEventListener("click", p.greet.bind(p));

const course = {
  title: "JavaScript course",
  range: 5,
};
// console.log("course", Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.range}/5`);
  },
});
course.printRating();

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "Bob",
      writable: true,
    },
    progress: {
      configurable: true,
      enumerable: true,
      value: 0.8,
      writable: false,
    },
  }
);
// student.name = "Bob";
// Object.defineProperty(student, "progress", {
//   configurable: true,
//   enumerable: true,
//   value: 0.8,
//   writable: false,
// });
student.printProgress();
console.log("student", student);
