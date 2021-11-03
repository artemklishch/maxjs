const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(
      (posData) => {
        // console.log("posData", posData);
        positionData = posData;
        return setTimer();
      }
      // (err) => {
      //   console.log("err", err);
      // }
    )
    // .catch((err) => {
    //   console.log("err", err);
    //   return 'Go go go'
    // })
    .then((data) => {
      console.log("data", data);
      console.log("positionData", positionData);
    })
    .catch((err) => {
      console.log("err", err);
    });
  setTimer(1000).then(() => {
    console.log("Timer gone...");
  });
  console.log("Getting location...");
}

button.addEventListener("click", trackUserHandler);
