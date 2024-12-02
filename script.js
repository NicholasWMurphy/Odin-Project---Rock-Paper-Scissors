//Returns the computers choice
function getComputerChoice () {
    getNumber = Math.floor((Math.random() * 3) + 1);
    if (getNumber === 1) {
        return "rock";
    } else if (getNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }  
}



//returns the humans choice
function getHumanChoice () {
  var userAnswer = prompt("Rock, paper or scissors?").toLowerCase();
  return userAnswer;
}



function playGame() {
    //keeps track of the score
    let humanScore = 0;
    let computerScore = 0;
    //a function that takes the previously stored variables as paramters and based on
    //the outcome presents a console log with a string showing who won.
    function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a draw! Go again!");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats rock!");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock!");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice ==="paper") {
            console.log("You win! Scissors beats paper!");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper");
            computerScore++
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors!");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats scissors!");
            computerScore++
        } else {
            console.log("error");
        }
        console.log(humanScore, computerScore)
    }

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

if (humanScore > computerScore) {
    console.log("YOU WON!!")
} else if (computerScore > humanScore) {
    console.log("YOU LOSE :(")
} else {
    console.log("WHAT. A. MATCH... IT'S A DRAW")
}

}

//plays the entire game, with 5 rounds
playGame()


















