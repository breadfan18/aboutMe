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
        winningMessageElement.innerHTML = "It's a tie! Both Computer and " + playerName + " chose " + computer.currentChoice;
    }
    else {
        winningMessageElement.innerHTML = winner + " wins! The computer chose " + computerChoice + " and the " + playerName + "  chose " + playerChoice;
    }
    document.body.appendChild(winningMessageElement);
}

function runGame(playerName) {
    errorPrompt.innerHTML = "";

    welcomeField.innerHTML = "Welcome " + playerName + ". Let's play <span class='gameNamme'>Lapis, Papyrus, Scalpellus</span>";
    gameButtons.style.display = "flex";
    if (computer.currentChoice === player.currentChoice) {
        display("Tie", playerName, computer.currentChoice, player.currentChoice);
    } else if (computer.currentChoice === choices[0]) {
        if (player.currentChoice === choices[1]) {
            display(playerName, playerName, computer.currentChoice, player.currentChoice);
        } else if (player.currentChoice === choices[2]) {
            display("Computer", playerName, computer.currentChoice, player.currentChoice);
        }
    } else if (computer.currentChoice === choices[1]) {
        if (player.currentChoice === choices[0]) {
            display("Computer", playerName, computer.currentChoice, player.currentChoice);
        } else if (player.currentChoice === choices[2]) {
            display(playerName, playerName, computer.currentChoice, player.currentChoice);
        }
    } else if (computer.currentChoice === choices[2]) {
        if (player.currentChoice === choices[0]) {
            display(playerName, playerName, computer.currentChoice, player.currentChoice);
        } else if (player.currentChoice === choices[1]) {
            display("Computer", playerName, computer.currentChoice, player.currentChoice);
        }
    }
}


startGameButton.addEventListener("click", function () {
    playerNameEntered = playerInputField.value;
    if (playerNameEntered === "") {
        errorPrompt.innerHTML = "Please enter your name to start";
    } else {
        runGame(playerNameEntered);
    }
}, false);



//To do:
//- after clicking Start Game, Show Game screen. 3 buttons, and everything that follows.

