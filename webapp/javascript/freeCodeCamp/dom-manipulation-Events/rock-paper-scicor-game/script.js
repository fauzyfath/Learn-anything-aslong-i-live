const options = ["Rock", "Paper", "Scissors"];

const getRandomComputerResult = () => {
  let random = Math.floor(Math.random()*3);
  return options[random];
}

const hasPlayerWonTheRound = (playerChoice, computerChoice) => {
    return (
        (playerChoice == "Rock" && computerChoice == "Scissors") ||
        (playerChoice == "Paper" && computerChoice == "Rock") ||
        (playerChoice == "Scissors" && computerChoice == "Paper")
    );
}

let playerScore = 0;
let computerScore = 0;

const getRoundResults = userOption => {
    const computerChoice = getRandomComputerResult();
    const isPlayerWon = hasPlayerWonTheRound(userOption, computerChoice);

    if(isPlayerWon){
        playerScore += 1;
        return `Player wins! ${userOption} beats ${computerChoice}`;
    }
    else if(computerChoice === userOption){
        return `It's a tie! Both chose ${userOption}`;
    }
    else {
        computerScore += 1;
        return `Computer wins! ${computerChoice} beats ${userOption}`;
    }
}

const playerScoreSpanElement = document.querySelector("span#player-score");
const computerScoreSpanElement = document.querySelector("span#computer-score");
const roundResultsMsg = document.querySelector("p#results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");


const showResults = userOption => {
    roundResultsMsg.innerText = getRoundResults(userOption);
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText= computerScore;

    winnerMsgElement.textContent = playerScore >= 3 ? "Player has won the game!" : computerScore >= 3 ? "Computer has won the game!" : "";

    resetGameBtn.style.display = winnerMsgElement.textContent.length > 0 ? "block" : "none" 
    optionsContainer.style.display = winnerMsgElement.textContent.length > 0 ? "none" : "block"
}

const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText= computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", () => resetGame)

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", () => showResults("Rock"));
paperBtn.addEventListener("click", () => showResults("Paper"));
scissorsBtn.addEventListener("click", () => showResults("Scissors"));

