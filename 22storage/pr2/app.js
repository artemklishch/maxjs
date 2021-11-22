const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

let db;

const dbRequest = indexedDB.open("StorageDummy", 1);
dbRequest.onsuccess = function (e) {
  db = e.target.result;
};

dbRequest.onupgradeneeded = function (e) {
  console.log("success", e);
  db = e.target.result;
  const objStore = db.createObjectStore("products", { keyPath: "id" });
  objStore.transaction.oncomplete = function (e) {
    const productStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productStore.add({
      id: "p1",
      name: "A first product",
      price: 12.99,
      tags: ["expensive", "luxury"],
    });
  };
};
dbRequest.onerror = function (e) {
  console.log("error", e);
};
storeBtn.addEventListener("click", () => {
  if (!db) return;
  const productStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  productStore.add({
    id: "p2",
    name: "A second product",
    price: 112.99,
    tags: ["expensive", "luxury"],
  });
});
retrBtn.addEventListener("click", () => {
  const productStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  const data = productStore.get("p2");
  data.onsuccess = function () {
    console.log("data", data.result);
  };
});
