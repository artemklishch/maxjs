import { initProducts } from "./product-management";

const addProductForm = document.getElementById("new-product");

function addProduct(event) {
  import("./product-management.js").then((mod) => mod.addProduct(event));
}

initProducts();

addProductForm.addEventListener("submit", addProduct);
