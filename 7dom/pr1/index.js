const toggleBtn = document.querySelector("button");
const list = document.querySelector(".list");
toggleBtn.addEventListener("click", () => {
  list.classList.toggle("invisible");
});
