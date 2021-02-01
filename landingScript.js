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
    let userNameEntered = userNameField.value;
    let pwdEntered = pwdField.value;
    let errorMessage = document.createElement("p");
    errorMessage.setAttribute("class", "error");

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

submitButton.addEventListener("click", login, false);
