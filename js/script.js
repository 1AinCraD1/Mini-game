const playerNumberElement = document.getElementById("player-number");
const playerScoreElement = document.getElementById("player-score");
const computerNumberElement = document.getElementById("computer-number");
const computerScoreElement = document.getElementById("computer-score");
const resultMessageElement = document.getElementById("result-message");
const generateNumberButton = document.getElementById("generate-number");
const resetScoreButton = document.getElementById("reset-score");

let playerName = "Player 1";
let playerScore = 0;
let computerScore = 0;
let isGameEnded = false;

generateNumberButton.addEventListener("click", () => {
    if (isGameEnded) {
        return;
    }

    const playerNumber = Math.floor(Math.random() * 10) + 1;
    const computerNumber = Math.floor(Math.random() * 10) + 1;

    playerNumberElement.textContent = playerNumber;
    computerNumberElement.textContent = computerNumber;

    if (playerNumber > computerNumber) {
        playerScore++;
    } else if (computerNumber > playerNumber) {
        computerScore++;
    }

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

    if (playerScore === 3 || computerScore === 3) {
        endGame();
    }
});

resetScoreButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    resultMessageElement.textContent = "";
    generateNumberButton.disabled = false;
    isGameEnded = false;
});

function endGame() {
    generateNumberButton.disabled = true;
    isGameEnded = true;
    if (playerScore > computerScore) {
        resultMessageElement.textContent = `Congratulations, ${playerName}! You won!`;
    } else if (computerScore > playerScore) {
        resultMessageElement.textContent = "The computer won. Try again.";
    }
}

function startGame() {
    const inputName = prompt("Please enter your name:");
    if (inputName) {
        playerName = inputName;
    }
}
startGame();
