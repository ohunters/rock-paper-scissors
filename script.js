// Select elements from DOM
let selectChoiceHeader = document.querySelector(".select-choice-header")
let optionButtonRock = document.querySelector(".option-button-rock");
let optionButtonPaper = document.querySelector(".option-button-paper");
let optionButtonScissors = document.querySelector(".option-button-scissors");
let resultContainerParagraph = document.querySelector(".result-container-paragraph");

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
    if (computerChoice === humanChoice) {
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


// Main game loop
/* 
while (computerScore < 5 && humanScore < 5) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    playRound(computerChoice, humanChoice);

    if (computerScore === 5) {
        alert("You have lost the game!");
        break;
    } else if (humanScore === 5) {
        alert("You have won the game!");
        break;
    }
}
*/

