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
gameBox.style.height = "100px";

var roundResult = document.createElement("div");
roundResult.style.border = "2px solid red";
roundResult.style.width = "100%";
roundResult.style.height = "50%";


var scoreUpdate = document.createElement("div");
scoreUpdate.style.width = "100%";
scoreUpdate.style.height = "40%";
scoreUpdate.style.border = "2px solid green";


gameBox.appendChild(scoreUpdate);
gameBox.appendChild(roundResult);





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
    
    
    function playRound (humanChoice, computerChoice) {

        if (humanScore > 4) {
            gameBox.innerText = "GAME OVER! HUMAN WINS! " +  + humanScore + ' ' + "to " + computerScore + ' ';
            gameBox.style.background = "green";
            return;
        } else if (computerScore > 4) {
            gameBox.innerText = "GAME OVER! COMPUTER WINS! " + computerScore + ' ' + "to " + humanScore + ' ';
            gameBox.style.background = "red";
            return;
        }
        if (humanChoice === computerChoice) {
            roundResult.innerText = "It's a draw! Go again!";
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            roundResult.innerText = "You lose! Paper beats rock!";
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            roundResult.innerText = "You win! Paper beats rock!";
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice ==="paper") {
            roundResult.innerText = "You win! Scissors beats paper!";
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            roundResult.innerText = "You lose! Scissors beats paper";
            computerScore++
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            roundResult.innerText = "You win! Rock beats scissors!";
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            roundResult.innerText = "You lose! Rock beats scissors!";
            computerScore++
        } else {
            roundResult.innerText = "error, try again";
        }
        scoreUpdate.innerText = humanScore + '' + ' - ' + computerScore + '';
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


















