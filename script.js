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
    return computerChoice;
}
// Logic for humans choice
function getHumanChoice () {
    humanChoice = prompt("Welcome to this game of Rock Paper Scissors where first to 5 rounds win! To start, please pick either Rock, Paper or Scissors");
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    return humanChoice;
}

// Logic for rounds 
function playRound (computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        alert(`Draw! You both picked ${computerChoice}`)
    } else if ((computerChoice ===  "Rock" && humanChoice === "Scissors") || (computerChoice === "Paper" && humanChoice === "Rock") || (computerChoice === "Scissors" && humanChoice === "Paper")) {
        alert(`You lose! ${computerChoice} beats ${humanChoice}`)
    } else {
        alert(`You win! ${humanChoice} beats ${computerChoice}`)
    }
}

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);


