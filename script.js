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
function playRound(playerSelection, computerChoice) {
    //check combinations to determine winner
    if (playerSelection === 'rock') {
        if (computerChoice === 'rock') {
            return "Tie Game!";
        }
        else if (computerChoice === 'paper') {
            return "You Lose! Paper beats Rock";
        }
        else if (computerChoice === 'scissors') {
            return "You Win! Rock beats Scissors";
        }

    }
    else if (playerSelection === 'paper') {
        if (computerChoice === 'rock') {
            return "You Win! Paper beats Rock";
        }
        else if (computerChoice === 'paper') {
            return "Tie Game!";
        }
        else if (computerChoice === 'scissors') {
            return "You Lose! Scissors beats Paper";
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerChoice === 'rock') {
            return "You Lose! Rock beats Scissors";
        }
        else if (computerChoice === 'paper') {
            return "You Win! Scissors beats Paper";
        }
        else if (computerChoice === 'scissors') {
            return "Tie Game!";
        }
    }

    //return string containing winner
    return gameOutput;
}

//create game function
function game() {
//create 3 variables called playerScore, computerScore & tiedScore to keep count of scores
    let playerScore = 0;
    let computerScore = 0;
    let tiedScore = 0;
    let returnStatement = "";

    //create loop to play 5 games
    for (let i = 0; i < 5; i++) {
        returnStatement = playRound(playerSelection(), getComputerChoice());

        if (returnStatement.includes("Win")) {
            playerScore += 1;
        }
        else if (returnStatement.includes("Lose")) {
            computerScore += 1;
        }
        else {
            tiedScore += 1;
        }

        console.log(returnStatement);
    }

    //return scores
    console.log(getScores(playerScore, computerScore, tiedScore));
}

function getScores(playerScore, computerScore, tiedScore) {
    if (playerScore > computerScore) {
        return `You Won! ${playerScore} wins vs ${computerScore} and there was ${tiedScore} tied games.`;
    }

    else if (playerScore < computerScore) {
        return `You Lost! ${playerScore} wins vs ${computerScore} and there was ${tiedScore} tied games.`;
    }

    else if (tiedScore > computerScore && tiedScore > playerScore) {
        return `Tie Game! You won ${playerScore} games, computer won ${computerScore} and there were ${tiedScore} tied games.`;
    }
}