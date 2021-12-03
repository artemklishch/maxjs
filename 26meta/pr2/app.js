const company = {
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

// console.log("empl", company.next());
// console.log("empl", company.next());
// console.log("empl", company.next());
// console.log("empl", company.next());
// console.log("empl", company.next());
// console.log("empl", company.next());
// console.log("empl", company.next());

let employee = company.next();
while (!employee.done) {
  console.log(employee.value);
  employee = company.next();
}
