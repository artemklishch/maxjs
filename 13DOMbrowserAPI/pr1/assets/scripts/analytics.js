// console.log("Sending data...");

const intervalId = setInterval(() => {
  console.log('Sending data...')
}, 2000)
document.getElementById('stop-analytics-btn').addEventListener('click', () => {
  clearInterval(intervalId)
})
