let playerScore = 0;
let computerScore = 0;

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

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    const playerWins = hasPlayerWonTheRound(userOption, computerResult);
   
    if (userOption === computerResult) {
        return `It's a tie! Both chose ${userOption}`;
    } else if (playerWins) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}