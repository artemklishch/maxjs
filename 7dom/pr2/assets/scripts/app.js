const openModalBtn = document.querySelector("header").children[1];
const addModal = document.getElementById("add-modal");
const cancelBtn = document.querySelector(".btn--passive");
const addBtn = document.querySelector(".btn--success");
const inputs = document.querySelectorAll(".modal__content input");
const movieList = document.querySelector(".movie-list");
const backdropView = document.getElementById("backdrop");

const openModal = () => {
  addModal.classList.add("visible");
  backdropView.classList.add("visible");
};
openModalBtn.addEventListener("click", openModal);

const closeModal = () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  addModal.classList.remove("visible");
  backdropView.classList.remove("visible");
};
cancelBtn.addEventListener("click", closeModal);

const addMovie = () => {
  const movieData = {};
  for (let i = 0; i < inputs.length; i++) {
    const firstLatterName = inputs[i].name.slice(0, 1).toUpperCase();
    const partName = inputs[i].name.slice(1);
    const name = firstLatterName + partName;
    movieData[name] = inputs[i].value;
  }
  const newMovie = document.createElement("li");

  // closeModal()
};
addBtn.addEventListener("click", addMovie);

backdropView.addEventListener("click", closeModal);
