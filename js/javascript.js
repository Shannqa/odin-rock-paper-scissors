/*

Algorithm:

- Computer makes a random choice.
- Player enters their choice in a prompt. 
  - Make sure it's rock, paper or scissors, case insensitive.
  - Show an error message if the user enters something else.
- Determine who wins. 
- Show a message informing who wins. 

- Repeat for 5 rounds.
- Keep the score, determine who wins overall after 5 rounds.
- Show a message announcing the winner.

*/
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";
  let computerSelection;
  let playerScore;
  let computerScore;

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
  
  
  if (randomNumber === 0) {
    computerSelection = rock;
  } else if (randomNumber === 1) {
    computerSelection = paper; 
  } else {
    computerSelection = scissors;
    }

console.log("Computer selected: " + computerSelection);

}

function playRound() {

  console.log("Round 1:");
  let playerSelection = prompt("Pick rock, paper or scissors").toLowerCase();

  getComputerChoice();                 
  console.log("Player selected: " + playerSelection);

  if (computerSelection === rock && playerSelection === scissors) {
    console.log("You lose! Rock beats scissors!");
  } else if (computerSelection === scissors && playerSelection === paper) {
    console.log("You lose! Scissors beat paper!");
    } else if (computerSelection === paper && playerSelection === rock) {
      console.log("You lose! Paper beats beats rock!");
    } else if (computerSelection === paper && playerSelection === scissors) {
      console.log("You win! Scissors beat paper!");
    } else if (computerSelection === scissors && playerSelection === rock) {
      console.log("You win! Rock beats scissors!");
    } else if (computerSelection === rock && playerSelection === paper) {
      console.log("You win! Paper beats rock!");
    } else if (computerSelection === playerSelection) {
      console.log("Tie!");
    }




}

playRound()