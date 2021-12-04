const company = {
  // curEmployee: 0,
  employees: ["Max", "Manu", "Ana"],
  // next() {
  //   if (this.curEmployee >= this.employees.length) {
  //     return { value: this.curEmployee, done: true };
  //   }
  //   const returnedValue = {
  //     value: this.employees[this.curEmployee],
  //     done: false,
  //   };
  //   this.curEmployee++;
  //   return returnedValue;
  // },
  [Symbol.iterator]: function* employeeGenerator() {
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
  getEmployee: function* employeeGenerator() {
    // let employee = company.next();
    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }

    // let employee = company.next();
    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};

const company1 = {
  curEmployee: 0,
  employees: ["Max", "Manu", "Ana"],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnedValue = {
      value: this.employees[this.curEmployee],
      done: false,
    };
    this.curEmployee++;
    return returnedValue;
  },
};
console.log("empl", company1.next());
console.log("empl", company1.next());
console.log("empl", company1.next());
console.log("empl", company1.next());
console.log("empl", company1.next());
console.log("empl", company1.next());
console.log("empl", company1.next());


const company2 = {
  curEmployee: 0,
  employees: ["Max", "Manu", "Ana"],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnedValue = {
      value: this.employees[this.curEmployee],
      done: false,
    };
    this.curEmployee++;
    return returnedValue;
  },

  getEmployee: function* employeeGenerator() {
    let employee = company2.next();
    while (!employee.done) {
      console.log('11111111');
      yield employee.value;
      employee = company2.next();
    }
    // console.log('0');
    // yield employee.value;
    // console.log('1');
    // employee = company2.next();
    // yield employee.value;
    // console.log('2');
    // employee = company2.next();
    // yield employee.value;
    // console.log(3);
    // employee = company2.next();
  },
  getEmployee1: function employeeGenerator() {
    let employee = company2.next();
    while (!employee.done) {
      console.log('11111111',  employee.value);
      employee = company2.next();
    }
  },
};

console.log('\n');
// company2.getEmployee1();
const it = company2.getEmployee();
console.log("logs1", it.next());
// console.log("logs1", it.next());
// console.log("logs1", it.next());
// console.log("logs1", it.next());
// console.log("logs1", it.next());


console.log('\n');

const company3 = {
  employees: ["Max", "Manu", "Ana"],
  [Symbol.iterator]: function* employeeGenerator() {
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
  getEmployee: function* employeeGenerator() {
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};




for (const val of company) {
  console.log("val", val);
}
console.log(("val2", [...company]));
const arr1 = ["Bob", "TOm"];
console.log("arr1", arr1);

const it2 = company3.getEmployee()
let totalValue = ""
totalValue += it2.next().value + "///";
totalValue += it2.next().value + "///";
totalValue += it2.next().value + "///";
totalValue += it2.next().value + "///";
totalValue += it2.next().value + "///";
console.log('totalValue', totalValue);

// async function someFunc(){
//   for(let i = 0; i < 2; i++){
//     await fetch()
//   }
// }