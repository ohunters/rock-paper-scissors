// Game Variables
let computerChoice = "";
let humanChoice = "";
let computerScore = 0;
let humanScore = 0;
let roundNumber = 0;
let gameWinner = ""
let randomNumber = Math.floor(Math.random() * 3 + 1)

// Logic for computers choice
function getComputerChoice () {
    if (randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    };
}
// Logic for humans choice
function getHumanChoice () {
    humanChoice = prompt("Welcome to this game of Rock Paper Scissors where first to 5 rounds win! To start, please pick either Rock, Paper or Scissors");
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    return humanChoice;
}

console.log(getHumanChoice());

// Logic for rounds 
function playRound (computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        alert(`Draw! You both picked ${computerChoice}`)
    } else if ((computerChoice ===  "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
        alert(`You lose! ${computerChoice[0].toUppercase()} beats `)
    }
}

// If computer pick is the same as human return draw

// If computer picks rock and human picks scissors return computer wins
// If computer picks paper and human picks rock return computer wins
// If computer picks scissors and human picks paper return computer wins

// If any other outcome return computer wins

// Add one to round variable



