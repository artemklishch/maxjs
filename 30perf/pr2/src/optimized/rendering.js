const productListEl = document.getElementById("product-list");
const renderingProducts = [];

export function renderProducts(products, deleteProductFn) {
  productListEl.innerHTML = "";
  products.forEach((product) => {
    const newListEl = createElement(product, product.id, deleteProductFn);
    productListEl.appendChild(newListEl);
  });
  // const startTime = performance.now();
  // for (let i = 0; i < products.length; i++) {
  //   const newListEl = createElement(
  //     products[i],
  //     products[i].id,
  //     deleteProductFn
  //   );
  //   productListEl.appendChild(newListEl);
  // }
  // const endTime = performance.now();
  // console.log("diff", endTime - startTime);
}

function createElement(product, prodId, deleteProductFn) {
  const newListEl = document.createElement("li");
  newListEl.innerHTML = `
    <h2>${product.title}</h2>
    <p>${product.price}</p>
  `;
  const prodDeleteButtonEl = document.createElement("button");
  prodDeleteButtonEl.textContent = "DELETE";
  newListEl.id = prodId;
  prodDeleteButtonEl.addEventListener(
    "click",
    deleteProductFn.bind(null, prodId)
  );
  newListEl.appendChild(prodDeleteButtonEl);
  return newListEl;
}

export function updateProducts(product, prodId, deleteProductFn, isAdding) {
  if (isAdding) {
    const newListEl = createElement(product, prodId, deleteProductFn);
    productListEl.insertAdjacentElement("afterbegin", newListEl);
    renderingProducts.push(newListEl);
    console.log('renderingProducts', renderingProducts);
  } else {
    const prodEl = document.getElementById(prodId);
    // prodEl.parentElement.removeChild(prodEl)
    prodEl.remove();
  }
}
