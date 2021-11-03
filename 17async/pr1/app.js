const button = document.querySelector("button");
const output = document.querySelector("p");

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      setTimer(2000).then((data) => {
        console.log("data", data);
        console.log("posData", posData);
      });
    },
    (error) => {
      console.log("error", error);
    }
  );
  setTimer(1000).then(() => {
    console.log("Timer gone...");
  });
  console.log("Getting location...");
}

// function trackUserHandler() {
//   // console.log("Clicked!");
//   navigator.geolocation.getCurrentPosition(
//     (posData) => {
//       setTimeout(() => {
//         console.log("posData", posData);
//       }, 2000);
//       // console.log("posData", posData);
//     },
//     (error) => {
//       console.log("error", error);
//     }
//   );
//   setTimeout(() => {
//     console.log("Timer gone...");
//   }, 0);
//   console.log("Getting location...");
// }

button.addEventListener("click", trackUserHandler);

// let result = 0;
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }
// console.log("result", result);
