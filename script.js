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


//round
function round(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        winner = "It's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        winner = "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        winner = "You Lose! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        winner = "You Lose! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        winner = "You Win! Scissors beats Paper";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        winner = "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        winner = "You Lose! Scissors beats Paper";
    return winner;
    }
}

//game
function game() {
    let playerSelection;
    let computerSelection;
    let computerScore = 0, playerScore = 0;
    let result;
    
    for (let i = 0; i < 5; i++) {
        playerSelection = window.prompt("Rock, Paper, Scissors");
        computerSelection = getComputerChoice();
        result = round(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("Win")) {
            playerScore++;
        } else if(result.includes("Lose")) {
            computerScore++;
        } else if(result.includes("tie")){
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