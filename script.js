//computer choice

//create function called getComputerChoice
function getComputerChoice() {
    //declare array with 3 possible options in it (Rock, Paper & Scissors)
    const choices = ["Rock", "Paper", "Scissors"];
    //generate random number between 0&2 (to be used to select option from array)
    let arrayPosition = Math.floor(Math.random() * 3);
    //select option from array into variable
    let computerChoice = choices[arrayPosition];
    //return option
    return computerChoice.toLowerCase();
}

//player choice
//create function called playerSelection
function playerSelection() {
    //declare variable called playerSelection to store players selection
    let playerSelection;
    //ask player to select (type) one of Rock, Paper or Scissors and store it in playerSelection variable
    playerSelection = prompt("Please select Rock, Paper or Scissors:");
    //convert playerSelection variable to lower case
    playerSelection = playerSelection.toLowerCase();
    //return playerSelection
    return playerSelection;
}

//play game
//create function that takes playerSelection & computerChoice as parameters
function playGame(playerSelection, computerChoice) {
    let gameOutput;
    //check combinations to determine winner
    if (playerSelection === 'rock') {
        if (computerChoice === 'rock') {
            gameOutput = "Tie Game!";
        }
        else if (computerChoice === 'paper') {
            gameOutput = "You Lose! Paper beats Rock";
        }
        else if (computerChoice === 'scissors') {
            gameOutput = "You Win! Rock beats Scissors";
        }

    }
    else if (playerSelection === 'paper') {
        if (computerChoice === 'rock') {
            gameOutput = "You Win! Paper beats Rock";
        }
        else if (computerChoice === 'paper') {
            gameOutput = "Tie Game!";
        }
        else if (computerChoice === 'scissors') {
            gameOutput = "You Lose! Scissors beats Paper";
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerChoice === 'rock') {
            gameOutput = "You Lose! Rock beats Scissors";
        }
        else if (computerChoice === 'paper') {
            gameOutput = "You Win! Scissors beats Paper";
        }
        else if (computerChoice === 'scissors') {
            gameOutput = "Tie Game!";
        }
    }

    //return string containing winner
    return gameOutput;
}
    