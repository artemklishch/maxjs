const buttons = document.querySelectorAll("button");

// button.onclick = function() {

// };

const buttonClickHandler = (event) => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log("This was clicked!");
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("event", event);
});

const div = document.querySelector("div");
div.addEventListener(
  "click",
  (event) => {
    console.log("div click", event);
  }
  // true
);

const button = document.querySelector("button");
button.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("btn click", event);
  console.log("this", this);
});

// const div = document.querySelector("div");
// div.addEventListener(
//   "mouseenter",
//   (event) => {
//     console.log("div click", event);
//   },
//   // true
// );

// const button = document.querySelector("button");
// button.addEventListener("mouseenter", (event) => {
//   event.stopPropagation();
//   console.log("btn click", event);
// });

// const listItems = document.querySelectorAll("li");
// listItems.forEach((item) =>
//   item.addEventListener("click", (e) => {
//     e.target.classList.toggle("hightlight");
//   })
// );

const list = document.querySelector("ul");
list.addEventListener("click", function (e) {
  // e.target.classList.toggle("hightlight");
  e.target.closest("li").classList.toggle("hightlight");
  // form.submit();
  console.log("this list", this);
});
