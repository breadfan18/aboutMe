const playerInputField = document.querySelector("header input");
const startGameButton = document.querySelector("header button");
const errorPrompt = document.querySelector(".enterNamePrompt");
const gameButtons = document.querySelector(".gameSection");
const welcomeField = document.querySelector("#welcome");
const winnerMsg = document.querySelector(".winnerMsg");

let playerNameEntered = null;

let player = {
    currentChoice: null
};

let computer = {
    currentChoice: null
};

const choices = ["Lapis", "Papyrus", "Scalpellus"];
let rand = Math.floor(Math.random() * 3);

computer.currentChoice = choices[rand];
player.currentChoice = choices[1];

const winningMessageElement = document.createElement("h2");
winningMessageElement.setAttribute("class", "displayText");

function display(winner, playerName, computerChoice, playerChoice) {
    if (winner === "Tie") {
        winningMessageElement.innerHTML = "It's a tie! Both Computer and " + playerName + " chose " + computerChoice;
    }
    else {
        winningMessageElement.innerHTML = winner + " wins! The <span id='computer'>computer</span> chose " +
            computerChoice + " and <span id='player'>" + playerName + "</span>  chose " + playerChoice;
    }
    document.body.appendChild(winningMessageElement);
}

function runGame(playerName, computerChoice, playerChoice) {
    errorPrompt.innerHTML = "";

    welcomeField.innerHTML = "Welcome " + playerName + ". Let's play <span class='gameName'>Lapis, Papyrus, Scalpellus</span>";
    gameButtons.style.display = "flex";
    if (computerChoice === playerChoice) {
        display("Tie", playerName, computerChoice, playerChoice);
    } else if (computerChoice === choices[0]) {
        if (playerChoice === choices[1]) {
            display(playerName, playerName, computerChoice, playerChoice);
        } else if (playerChoice === choices[2]) {
            display("Computer", playerName, computerChoice, playerChoice);
        }
    } else if (computerChoice === choices[1]) {
        if (playerChoice === choices[0]) {
            display("Computer", playerName, computerChoice, playerChoice);
        } else if (playerChoice === choices[2]) {
            display(playerName, playerName, computerChoice, playerChoice);
        }
    } else if (computerChoice === choices[2]) {
        if (playerChoice === choices[0]) {
            display(playerName, playerName, computerChoice, playerChoice);
        } else if (playerChoice === choices[1]) {
            display("Computer", playerName, computerChoice, playerChoice);
        }
    }
}


startGameButton.addEventListener("click", function () {
    playerNameEntered = playerInputField.value;
    if (playerNameEntered === "") {
        errorPrompt.innerHTML = "Please enter your name to start";
    } else {
        runGame(playerNameEntered, player.currentChoice, computer.currentChoice);
    }
}, false);

function setPlayerChoice(e) {

}

//To do:
//- after clicking Start Game, Start Game button changes to Reset Game, change the id attribute etc.


document.querySelector("section").addEventListener("click",
    function (e) {
        console.log(e.target);
    });