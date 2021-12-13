const form = document.getElementById("user-input");

function signUpHandler(e) {
  e.preventDefault();
  const userNameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const enteredUsername = userNameInput.value;
  const enteredPassword = passwordInput.value;
  if (enteredUsername.trim() === 0) {
    alerts("Input is invalid - username must not be empty");
    return;
  }
  if (enteredPassword.trim() <= 5) {
    alerts("Input is invalid - password must not be leass, then 5 symbols");
    return;
  }
  const user = {
    userName: enteredUsername,
    password: enteredPassword,
  };
  console.log("user", user);
  console.log("Hi I am " + user.userName);
}

form.addEventListener("submit", signUpHandler);
