//computer choice

//create function called getComputerChoice
function getComputerChoice() {
    //declare array with 3 possible options in it (Rock, Paper & Scissors)
    const choices = ["Rock", "Paper", "Scissors"];
    //generate random number between 0&2 (to be used to select option from array)
    let arrayPosition = Math.floor(Math.random() * 3);
    //select option from array into variable
    let compChoice = choices[arrayPosition];
    //return option
    return compChoice;
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