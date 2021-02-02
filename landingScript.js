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
const errorSection = document.querySelector("#error");

let invalidAttemptCounter = 0;

function login() {
    console.log("login function called");
    let userNameEntered = userNameField.value;
    let pwdEntered = pwdField.value;

    if ((userNameEntered !== userName) || (pwdEntered !== pwd)) {
        invalidAttemptCounter++;
        errorSection.innerHTML = "Invalid Credentials. ATTEMPT " + invalidAttemptCounter;
        errorSection.style.backgroundColor = "black";
    }
    else if (userNameEntered === userName && pwdEntered === pwd) {
        window.location.replace("aboutMePage.html");
    }
}

submitButton.addEventListener("click", login, false);
pwdField.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        submitButton.click();
    }
}, false);
