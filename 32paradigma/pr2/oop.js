// class Form {
//   constructor() {
//     const form = document.getElementById("user-input");
//     form.addEventListener("submit", this.signUpHandler);
//   }
//   signUpHandler(e) {
//     e.preventDefault();
//     const userNameInput = document.getElementById("username");
//     const passwordInput = document.getElementById("password");
//     const enteredUsername = userNameInput.value;
//     const enteredPassword = passwordInput.value;
//     if (enteredUsername.trim().length === 0) {
//       alert("Input is invalid - username must not be empty");
//       return;
//     }
//     if (enteredPassword.trim().length <= 5) {
//       alert("Input is invalid - password must not be leass, then 5 symbols");
//       return;
//     }
//     const user = {
//       userName: enteredUsername,
//       password: enteredPassword,
//     };
//     console.log("user", user);
//     console.log("Hi I am " + user.userName);
//   }
// }

// new Form();

class Validator {
  static REQUIRED = "REQUIRED";
  static MIN_LENGTH = "MIN_LENGTH";
  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  constructor(uName, uPassword) {
    this.userName = uName;
    this.password = uPassword;
  }
  greet() {
    console.log("Hi, I am " + this.userName);
  }
}

class userInputForm {
  constructor() {
    this.form = document.getElementById("user-input");
    this.userNameInput = document.getElementById("username");
    this.passwordInput = document.getElementById("password");
    this.form.addEventListener("submit", this.signUpHandler.bind(this));
  }
  signUpHandler(e) {
    e.preventDefault();
    const enteredUsername = this.userNameInput.value;
    const enteredPassword = this.passwordInput.value;
    if (
      !Validator.validate(enteredUsername, Validator.REQUIRED) ||
      !Validator.validate(enteredPassword, Validator.REQUIRED, 5)
    ) {
      alert("Username or password is invalid");
      return;
    }
    const newUser = new User(enteredUsername, enteredPassword);
    newUser.greet();
  }
}
new userInputForm();
