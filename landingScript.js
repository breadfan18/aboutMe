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
    }
    else if (userNameEntered === userName && pwdEntered === pwd) {
        window.location.replace("aboutMePage.html");
    }
}

submitButton.addEventListener("click", login, false);
pwdField.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        submitButton.click();
    }
}, false);
