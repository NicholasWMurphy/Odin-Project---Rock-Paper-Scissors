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

//generates buttons

const buttonDiv = document.createElement("div");

var rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.setAttribute("id", "rock");

var paperButton = document.createElement("button");
paperButton.setAttribute("id", "paper");
paperButton.textContent = "Paper";

var scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
scissorsButton.setAttribute("id", "scissors");

var gameBox = document.createElement("div");
gameBox.style.border = "2px solid black";
gameBox.style.width = "40%";
gameBox.style.height = "50px";


var scoreUpdate = document.createElement("div");
scoreUpdate.style.width = "100%";
scoreUpdate.style.height = "50%";
scoreUpdate.style.border = "2px solid green";


gameBox.appendChild(scoreUpdate);





window.addEventListener('load', function() {

buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorsButton);

document.body.appendChild(buttonDiv);
this.document.body.appendChild(gameBox);

})









function playGame() {
    //keeps track of the score
        let humanScore = 0;
        let computerScore = 0;

   



    //a function that takes the previously stored variables as paramters and based on
    //the outcome presents a console log with a string showing who won.
    function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            gameBox.innerText = "It's a draw! Go again!";
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            gameBox.innerText = "You lose! Paper beats rock!";
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            gameBox.innerText = "You win! Paper beats rock!";
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice ==="paper") {
            gameBox.innerText = "You win! Scissors beats paper!";
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            gameBox.innerText = "You lose! Scissors beats paper";
            computerScore++
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            gameBox.innerText = "You win! Rock beats scissors!";
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            gameBox.innerText = "You lose! Rock beats scissors!";
            computerScore++
        } else {
            gameBox.innerText = "error, try again";
        }
        scoreUpdate.innerText = humanScore, computerScore;
    }


if (humanScore > computerScore) {
    console.log("YOU WON!!")
} else if (computerScore > humanScore) {
    console.log("YOU LOSE :(")
} else {
    console.log("WHAT. A. MATCH... IT'S A DRAW")
}

         //runs playRound once user clicks a button
         rockButton.addEventListener("click", function() {
            playRound("rock", getComputerChoice())
         });

         paperButton.addEventListener("click", function(){
            playRound("paper", getComputerChoice())
         })

         scissorsButton.addEventListener("click", function() {
            playRound("scissors", getComputerChoice())
         })

}

//plays the entire game, with 5 rounds
playGame()


















