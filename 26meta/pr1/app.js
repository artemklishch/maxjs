const uid = Symbol();
// const uid = Symbol("uid");
console.log("uid", uid);

const user = {
  //   id: "p1",
  [uid]: "p1",
  name: "Max",
  age: 30,
  [Symbol.toStringTag]: "User Object",
};

user.uid = "p2";
user[uid] = "p3";
console.log("user", user);
console.log("useruid", user[uid]);
console.log("useragain", user.toString());
