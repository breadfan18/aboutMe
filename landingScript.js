const userName = "breadfan18";
const pwd = "Test1234#";

const userNameField = document.querySelector("#userNameField");
const pwdField = document.querySelector("#pwdField");
const submitButton = document.querySelector("#loginSubmit");
const loginSection = document.querySelector(".loginSection");


function login() {
    let userNameEntered = userNameField.value;
    let pwdEntered = pwdField.value;

    if (userNameEntered !== userName) {
        let message = document.createElement("div");
        message.innerHTML = "<p>Wrong Username</p>";
        message.setAttribute("class", "error");
        console.log(message);

        loginSection.appendChild(message);
    }
}

submitButton.addEventListener("click", login, false);
