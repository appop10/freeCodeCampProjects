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

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
   
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;
      } else if (computerResult === userOption) {
        return `It's a tie! Both chose ${userOption}`;
      } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
      }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;

    if (playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = `${
            playerScore === 3 ? "Player" : "Computer"
          } has won the game!`;
        optionsContainer.style.display = "none";
        resetGameBtn.style.display = "block";
    } 
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    roundResultsMsg.innerText = "";
    winnerMsgElement.innerText = "";
    optionsContainer.style.display = "block";
    resetGameBtn.style.display = "none";
}