const playerInputField = document.querySelector("header input");
const startGameButton = document.querySelector("header button");
const errorPrompt = document.querySelector("header p");

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

function runGame(playerName) {
    console.log(playerName);

    if (computer.currentChoice === player.currentChoice) {
        console.log("It's a tie! Both Computer and " + playerName + " chose " + computer.currentChoice);
    } else if (computer.currentChoice === choices[0]) {
        if (player.currentChoice === choices[1]) {
            console.log(playerName + " wins! Computer chose " + computer.currentChoice + "and " + playerName + "chose " + player.currentChoice);
        } else if (player.currentChoice === choices[2]) {
            console.log("Computer wins! Computer chose " + computer.currentChoice + "and " + playerName + "chose " + player.currentChoice);
        }
    } else if (computer.currentChoice === choices[1]) {
        if (player.currentChoice === choices[0]) {
            console.log("Computer wins! Computer chose " + computer.currentChoice + "and " + playerName + "chose " + player.currentChoice);
        } else if (player.currentChoice === choices[2]) {
            console.log(playerName + " wins! Computer chose " + computer.currentChoice + "and " + playerName + "chose " + player.currentChoice);
        }
    } else if (computer.currentChoice === choices[2]) {
        if (player.currentChoice === choices[0]) {
            console.log(playerName + " wins! Computer chose " + computer.currentChoice + "and " + playerName + "chose " + player.currentChoice);
        } else if (player.currentChoice === choices[1]) {
            console.log("Computer wins! Computer chose " + computer.currentChoice + "and " + playerName + "chose " + player.currentChoice);
        }
    }
}


startGameButton.addEventListener("click", function () {
    playerNameEntered = playerInputField.value;
    if (playerNameEntered === "") {
        errorPrompt.innerHTML = "Please enter your name to start."
    } else {
        runGame(playerNameEntered);
    }
}, false);



//To do:
//- after clicking Start Game, Show Game screen. 3 buttons, and everything that follows.

