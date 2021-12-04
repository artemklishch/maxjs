const course = {
  title: "JavaScript = The Complete Guide",
};

const courseHandlers = {
  get(object, propertyName) {
    console.log("propertyName", propertyName);
    return object[propertyName];
  },
  set(object, propertyName, propertyValue) {
    if (propertyName === "rating") {
      return;
    }
    object[propertyName] = propertyValue;
  },
};

const pCourse = new Proxy(course, courseHandlers);
pCourse.rating = 5
console.log("pCourse", pCourse);
console.log("pCourse.title", pCourse.title);
