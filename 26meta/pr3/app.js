const course = {
  title: "JavaScript = The Complete Guide",
};
Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});
// console.log(course.toString());
Reflect.deleteProperty(course, "title");
Reflect.defineProperty(course, "title2", { value: "Hello" });
console.log("course", course);
