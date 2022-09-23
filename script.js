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
   