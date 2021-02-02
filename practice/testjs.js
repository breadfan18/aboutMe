let player = {
    currentChoice: null
};

let computer = {
    currentChoice: null
};

const choices = ["lapis", "papyrus", "scalpellus"];
let rand = Math.floor(Math.random() * 3);

computer.currentChoice = choices[rand];
console.log(computer.currentChoice);
player.currentChoice = choices[1];
console.log(player.currentChoice);

if (computer.currentChoice === player.currentChoice) {
    console.log("It's a tie!");
}else if (computer.currentChoice === choices[0]) {
    if (player.currentChoice === choices[1]) {
        console.log("Player wins!");
    }else if (player.currentChoice === choices[2]) {
        console.log("Computer wins!");
    }
}else if (computer.currentChoice === choices[1]) {
    if (player.currentChoice === choices[0]) {
        console.log("Player wins!");
    }else if (player.currentChoice === choices[2]) {
        console.log("Computer wins!");
    }
}else if (computer.currentChoice === choices[2]) {
    if (player.currentChoice === choices[0]) {
        console.log("Player wins!");
    }else if (player.currentChoice === choices[1]) {
        console.log("Computer wins!");
    }
}






