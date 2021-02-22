function getName() {
  return prompt("Youe name: ", "");
}
function greet() {
  const name = getName();
  console.log("Hello " + name);
}
greet();
