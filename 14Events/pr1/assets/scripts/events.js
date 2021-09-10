const button = document.querySelector("button")

const alertButtonClickOne = () => {
    alert('Button was clicked')
}
const alertButtonClickTwo = () => {
    console.log('It was clicked')
}

// button.onclick = alertButtonClickOne


button.addEventListener("click", alertButtonClickOne);
button.addEventListener("click", alertButtonClickTwo);