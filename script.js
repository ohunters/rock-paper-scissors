// Game Variables
let computerScore = 0;
let humanScore = 0;

// Logic for computer's choice
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Logic for human's choice
function getHumanChoice() {
    let choice = prompt("First to 5 Wins! Pick Rock, Paper, or Scissors:");
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

// Logic for a single round
function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        alert(`Draw! You both picked ${computerChoice}. Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else if (
        (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Paper" && humanChoice === "Rock") ||
        (computerChoice === "Scissors" && humanChoice === "Paper")
    ) {
        computerScore++;
        alert(`You lose! ${computerChoice} beats ${humanChoice}. Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        humanScore++;
        alert(`You win! ${humanChoice} beats ${computerChoice}. Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Main game loop
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
