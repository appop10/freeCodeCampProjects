function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
    let playerWins;

    if (player === "Rock" && computer === "Scissors") {
        playerWins = true;
    } else if (player === "Paper" && computer === "Rock") {
        playerWins = true;
    } else if (player === "Scissors" && computer === "Paper") {
        playerWins = true;
    } else {
        playerWins = false;
    }

    return playerWins;
}