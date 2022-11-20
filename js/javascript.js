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
let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
  let randomNumber = Math.floor(Math.random() * 3);
    
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper"; 
  } else {
    return "scissors";
  }
}

function getPlayerChoice() {
  return prompt("Pick rock, paper or scissors").toLowerCase();
}

function playRound(computerSelection, playerSelection) { 

  if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log("You lose! Rock beats scissors!");
    computerScore += 1;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log("You lose! Scissors beat paper!");
    computerScore += 1;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    console.log("You lose! Paper beats beats rock!");
    computerScore += 1;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    console.log("You win! Scissors beat paper!");
    playerScore += 1;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    console.log("You win! Rock beats scissors!");
    playerScore += 1;
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    console.log("You win! Paper beats rock!");
    playerScore += 1;
  } else if (computerSelection === playerSelection) {
    console.log("Tie!");
  }
}



function game() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = getPlayerChoice()
    let computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection); 
  } 
  
  if (computerScore < playerScore) {
    console.log ("Congratulations, you won!");
  } else if (computerScore > playerScore) {
    console.log ("Sorry, you lost!");
  } else {
    console.log ("It's a tie!");
  }

  console.log("Final result - Computer: " + computerScore + " Player: " + playerScore);
 
}

game();
