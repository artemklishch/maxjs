console.log("Numbers");
console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log(Math.pow(2, 53));
console.log(Math.pow(2, 53) + 1);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 1);

console.log((1).toString(2));
console.log((5).toString(2));
console.log((1 / 5).toString(2));
console.log((0.2).toString(2));
console.log((0.2).toFixed(20));
console.log((20.2).toFixed(20));

console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991n);
console.log(9007199254740991n + 2n);
console.log(parseInt(91n) + 2);
console.log(10n + BigInt(2));

console.log(Number.POSITIVE_INFINITY);
console.log(Number.isFinite(10));
console.log(Number.isFinite(Infinity));

function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomIntBetween(5, 10));

console.log("\n", "Strings");
function productDescription(strings, productName, productPrice) {
  console.log("strings", strings);
  console.log("productName", productName);
  console.log("productPrice", productPrice);
  let priceCategory = "cheap";
  if (productPrice > 20) {
    priceCategory = "fair";
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}
const prodName = "JavaScript Course";
const prodPrice = 29.99;
const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);

console.log("/n");
console.log("RexEx");
const email1 = /^\S+@\S+\.\S+$/;
console.log(email1.test("df"));
console.log(email1.test("test@test.com"));
const r1 = /hello/;
const r2 = /(h|H)ello/;
console.log(r1.test("fdgsgf, hello"));
console.log(r1.test("fdgsgf, Hello"));
console.log(r2.test("fdgsgf, Hello"));
const r3 = /.ello/;
console.log(r3.test("hello"));
console.log(r3.test("ello"));
console.log(r3.test("Jello"));
