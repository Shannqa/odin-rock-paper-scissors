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

function GetComputerChoice () {
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";

  let randomNumber = Math.floor(Math.random() * 3);
  let computerSelection;
  
  if (randomNumber === 0) {
    computerSelection = rock;
  } else if (randomNumber === 1) {
    computerSelection = paper 
  } else {
    computerSelection = scissors;
    }

console.log("Computer selected: " + computerSelection);

}

let playerSelection = prompt("Pick rock, paper or scissors");

GetComputerChoice();
console.log("Player selected: " + playerSelection);