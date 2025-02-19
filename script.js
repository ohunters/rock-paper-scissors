// Select elements from DOM
let selectChoiceHeader = document.querySelector(".select-choice-header")
let optionButtonRock = document.querySelector(".option-button-rock");
let optionButtonPaper = document.querySelector(".option-button-paper");
let optionButtonScissors = document.querySelector(".option-button-scissors");
let resultContainer = document.querySelector(".result-container");
let resultContainerParagraph = document.querySelector(".result-container-paragraph");
let resetButton;

// Game Variables
let computerScore = 0;
let humanScore = 0;

// Logic for computer's choice
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Logic for a single round
function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice ) {
        resultContainerParagraph.textContent = `Draw! You both picked ${computerChoice}. Score - You: ${humanScore}, Computer: ${computerScore}`;
    } else if (
        (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Paper" && humanChoice === "Rock") ||
        (computerChoice === "Scissors" && humanChoice === "Paper")
    ) {
        computerScore++;
        resultContainerParagraph.textContent = `You lose! ${computerChoice} beats ${humanChoice}. Score - You: ${humanScore}, Computer: ${computerScore}`;
    } else {
        humanScore++;
        resultContainerParagraph.textContent = `You win! ${humanChoice} beats ${computerChoice}. Score - You: ${humanScore}, Computer: ${computerScore}`;
    };

    if (computerScore === 5 || humanScore === 5) {
        if (computerScore === 5) {
            resultContainerParagraph.textContent = `You lose the game! ${computerChoice} beats ${humanChoice}. Final Score - You: ${humanScore}, Computer: ${computerScore}. Please press the restart button to play again!`;
        } else {
            resultContainerParagraph.textContent = `You win the game! ${humanChoice} beats ${computerChoice}. Final Score - You: ${humanScore}, Computer: ${computerScore}. Please press the restart button to play again!`;
        }

        optionButtonRock.disabled = true;
        optionButtonPaper.disabled = true;
        optionButtonScissors.disabled = true;

        if (!resetButton) {
            resetButton = document.createElement("button");
            resetButton.textContent = "RESET GAME";
            resultContainer.appendChild(resetButton);
            resetButton.addEventListener("click", restartGame);
        }
    }
};

function restartGame() {
    computerScore = 0;
    humanScore = 0;
    optionButtonRock.disabled = false;
    optionButtonPaper.disabled = false;
    optionButtonScissors.disabled = false;
    resultContainerParagraph.textContent = "";

    if (resetButton) {
        resultContainer.removeChild(resetButton);
        resetButton = null;  
    }
}



optionButtonRock.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playRound(computerChoice, "Rock")
});
optionButtonPaper.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playRound(computerChoice, "Paper")
});
optionButtonScissors.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playRound(computerChoice, "Scissors")
});



