const REQUIRED = "REQUIRED";
const MIN_LENGTH = "MIN_LENGTH";

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

function getUserInput(inputId) {
  return document.getElementById(inputId).value;
}

function createUser(userName, password) {
  if (!validate(userName, REQUIRED) || !validate(password, MIN_LENGTH, 5)) {
    throw new Error("Username or password is invalid");
  }
  return { userName, password };
}

function greet(user) {
  console.log("Hi, I am " + user.userName);
}

function signUpHandler(e) {
  e.preventDefault();
  const enteredUsername = getUserInput("username");
  const enteredPassword = getUserInput("password");
  try {
    const newUser = createUser(enteredUsername, enteredPassword);
    greet(newUser);
  } catch (err) {
    alert(err.message);
  }
}

function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById(formId);
  form.addEventListener("submit", formSubmitHandler);
}

connectForm("user-input", signUpHandler);
