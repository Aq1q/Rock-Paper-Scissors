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

function getPlayerChoice() {
    let choice;
    while( choice != "rock" && choice != "paper" && choice != "scissors") {
        choice =  window.prompt("Rock, Paper, Scissors");
        choice = choice.toLowerCase();
    }
    return choice;
}


//round
function round(playerSelection, computerSelection) {
    
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        winner = "It's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        winner = "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        winner = "You Lose! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        winner = "You Lose! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        winner = "You Win! Scissors beats Paper";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        winner = "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        winner = "You Lose! Scissors beats Paper";
    }
    return winner;
}


function game() {
    let playerSelection;
    let computerSelection;
    let computerScore = 0, playerScore = 0;
    let result = "";

    
    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        result = round(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("Win!", 0)) {
            playerScore++;
        } else if(result.includes("Lose!", 0)) {
            computerScore++;
        } else {
            playerScore++;
            computerScore++;
        }
    }
    
    if (computerScore > playerScore) {
        console.log("Computer wins this game!");
    } else if (computerScore < playerScore) {
        console.log("You win this game!");
    } else {
        console.log("It's a Draw!");
    }
}

game();