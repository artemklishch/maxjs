const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "u123";
const user = {
  name: "Bib",
  age: 30,
  honnies: ["soccer", "fishing"],
};

storeBtn.addEventListener("click", () => {
  sessionStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});
retrBtn.addEventListener("click", () => {
  const extractedId = sessionStorage.getItem("uid");
  const extractedUser = localStorage.getItem("user");
  if (extractedId) {
    console.log("extractedId", extractedId);
  } else {
    console.log("NO id");
  }
  if (extractedUser) {
    console.log("extractedUser", extractedUser);
  } else {
    console.log("No user");
  }
});
