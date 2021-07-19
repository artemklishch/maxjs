// const moviesList = document.querySelector("#movie-list");
// moviesList.style["background-color"] = "red";
// moviesList.style.display = "block";

// let person = {
//   "first name": "Max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   greet: function () {
//     alert("Hi there!");
//   },
//   1.5: "hello",
// };

// // ...

// // person.greet()
// // person.age = 31;
// delete person.age;
// // person.age = undefined;
// // person.age = null;
// person.isAdmin = true;

// console.log(person["first name"]);
// console.log(person[1.5]);
// console.log(person);

const addMoviebtn = document.getElementById("add-movie-btn");
const searchMoviebtn = document.getElementById("search-btn");

const movies = [];

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(newMovie);
};
