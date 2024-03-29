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

async function trackUserHandler() {
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (err) {
    console.log("err1111", err);
  }
  console.log("posData", posData);
  console.log("timerData", timerData);
}

button.addEventListener("click", trackUserHandler);

Promise.race([getPosition(), setTimer(1000)]).then(data => {
  console.log('data111111', data);
});

Promise.all([getPosition(), setTimer(1000)]).then(data => {
  console.log('data22222', data);
});

Promise.allSettled([getPosition(), setTimer(1000)]).then(data => {
  console.log('data33333', data);
});