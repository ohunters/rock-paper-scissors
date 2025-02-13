// Game Variables
let computerChoice = "";
let humanChoice = "";
let computerScore = 0;
let humanScore = 0;
let roundNumber = 0;
let gameWinner = ""
let randomNumber = Math.floor(Math.random() * 3 + 1)


// Logic for computers choice
function getComputerChoice {
    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    };
}



// Logic for humans choice
function getHumanChoice {
    humanChoice = prompt("Please pick either Rock, Paper or Scissors")
    humanChoice = humanChoice.toLowerCase();
};


// Create play round function which takes computer choice and human choice

// If computer pick is the same as human return draw

// If computer picks rock and human picks scissors return computer wins
// If computer picks paper and human picks rock return computer wins
// If computer picks scissors and human picks paper return computer wins

// If any other outcome return computer wins

// Add one to round variable



