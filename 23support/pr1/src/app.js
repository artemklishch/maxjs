// import "core-js/features/promise";
// import "core-js";

// это используем, если useBuiltIns в настройках вебпака-бейбла равен "entry"
// если мы не знаем наверняка какой именно полифил нам нужен
// import "core-js/stable";
// import "regenerator-runtime/runtime";

const button = document.querySelector("button");
const textParagraph = document.querySelector("p");

button.addEventListener("click", () => {
  const text = textParagraph.textContent;
  const promise = new Promise();
  console.log("promise", promise);
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.log("err", err));
  } else {
    alert("Feature doesn't work!");
  }
});
