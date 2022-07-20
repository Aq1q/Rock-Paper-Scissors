//game

function getComputerChoice() {
    let computerChoice;
    let choice = Math.floor((Math.random()*3)) + 1;
    
    if (choice == 1) {
        computerChoice = "Rock";
    } else if (choice == 2) {
        computerChoice = "Paper";
    } else { computerChoice = "Scissors"; }

    return computerChoice;
}


function playRound() {

    let computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();

    let roundResult;

    if (this.id == computerSelection) {
        roundResult = "It's a tie!";
    } else if (this.id == "paper" && computerSelection == "rock" ||
            this.id == "scissors" && computerSelection == "paper" ||
            this.id == "rock" && computerSelection == "scissors") {
                
        roundResult = "W";

    } else if (this.id == "scissors" && computerSelection == "rock" ||
            this.id == "rock" && computerSelection == "paper" || 
            this.id == "paper" && computerSelection == "scissors") {

        roundResult = "L";

    }
    
    announceResult(roundResult);
}


function announceResult(matchResult) {
    if (matchResult.includes("W")) {
        win();
    } else if (matchResult.includes("L")) {
        lose();
    } else if (computerPoints < 5 && playerPoints < 5) {
        result.innerText = "Result: It's a Tie!";
    }
}


function lose() {
    if(computerPoints < 5 && playerPoints < 5) {
        result.innerText = "Result: Computer wins this round!";
        computerPoints++;
        computerScore.innerText = "Computer Score: " + computerPoints;
    }
    if (computerPoints == 5) {
        announceWinner("computer");
    }
}

function win() {
    if(playerPoints < 5 && computerPoints < 5){
        result.innerText = "Result: You win this round!";
        playerPoints++;
        playerScore.innerText = "Player Score: " + playerPoints;
    }
    if (playerPoints == 5) {
        announceWinner("player");
    }
}

function announceWinner(winner) {
    if (document.getElementById("again") != null) {
        return;
    } else {
        const again = document.createElement('div');
        again.id = "again";
        again.innerText = "Play Again";
        document.getElementById("final").appendChild(again);
        again.addEventListener('click', tryAgain);
    }
    
    if (winner == "player") {
        document.getElementById('finalResult').innerText = "You Win this game!";
    }
    if (winner == "computer") {
        document.getElementById('finalResult').innerText = "Computer Wins this game!";
    }
}

function tryAgain() {
    document.location.reload();
}


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const result = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const finalResult = document.getElementById("finalResult");



let playerPoints = 0;
let computerPoints = 0;

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

