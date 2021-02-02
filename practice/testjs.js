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

if (computer.currentChoice === player.currentChoice) {
    console.log("It's a tie! Both Computer and Player chose " + computer.currentChoice);
}else if (computer.currentChoice === choices[0]) {
    if (player.currentChoice === choices[1]) {
        console.log("Player wins! Computer chose " + computer.currentChoice + " and player chose " + player.currentChoice);
    }else if (player.currentChoice === choices[2]) {
        console.log("Computer wins! Computer chose " + computer.currentChoice + " and player chose " + player.currentChoice);
    }
}else if (computer.currentChoice === choices[1]) {
    if (player.currentChoice === choices[0]) {
        console.log("Computer wins! Computer chose " + computer.currentChoice + " and player chose " + player.currentChoice);
    }else if (player.currentChoice === choices[2]) {
        console.log("Player wins! Computer chose " + computer.currentChoice + " and player chose " + player.currentChoice);
    }
}else if (computer.currentChoice === choices[2]) {
    if (player.currentChoice === choices[0]) {
        console.log("Player wins! Computer chose " + computer.currentChoice + " and player chose " + player.currentChoice);
    }else if (player.currentChoice === choices[1]) {
        console.log("Computer wins! Computer chose " + computer.currentChoice + " and player chose " + player.currentChoice);
    }
}






