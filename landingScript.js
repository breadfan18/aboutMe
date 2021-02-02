/*
* Ideas
* - Create a show/hide pwd toggle
* - Create Account Feature - save as objects in an array?? think about how to store
* -
* */



const userName = "breadfan18";
const pwd = "test";

const userNameField = document.querySelector("#userNameField");
const pwdField = document.querySelector("#pwdField");
const submitButton = document.querySelector("#loginSubmit");
const loginSection = document.querySelector(".loginSection");

let wrongUserNameMessageCreated = false;

function login() {
    console.log("login function called");
    let userNameEntered = userNameField.value;
    console.log(userNameEntered);
    let pwdEntered = pwdField.value;
    console.log(pwdEntered);
    let errorMessage = document.createElement("p");
    errorMessage.setAttribute("class", "error");
    errorMessage.innerHTML = null;

    if (userNameEntered !== userName && !wrongUserNameMessageCreated) {
        errorMessage.innerHTML = "Wrong Username";
        loginSection.appendChild(errorMessage);
        wrongUserNameMessageCreated = true;
    }else if (userNameEntered === userName && pwdEntered !== pwd) {
        errorMessage.innerHTML = "Wrong Password";
        loginSection.appendChild(errorMessage);
        wrongUserNameMessageCreated = true;
    }
}

function clearError() {
    let errorElement = document.querySelector(".loginSection p");
    errorElement.remove();
}

submitButton.addEventListener("click", login, false);
