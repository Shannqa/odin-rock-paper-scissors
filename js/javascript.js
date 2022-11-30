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





let playerSelection;
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
const rock = document.getElementById('rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const div = document.querySelector('.text');

rock.addEventListener('click', function () {
  choice ('rock');
});
paper.addEventListener('click', function () {
  choice ('paper');
});
scissors.addEventListener('click', function () {
  choice ('scissors');
});

function choice (arg) {
  playerSelection = arg;
  console.log(playerSelection);
  game();
}
function game() {
  let computerSelection = getComputerChoice();
  playRound(computerSelection, playerSelection); 
}

function addText(text) {
  const p = document.createElement('p');
  p.textContent = text;
  div.appendChild(p);
}

  // function getPlayerChoice() {
  // return prompt("Pick rock, paper or scissors").toLowerCase();
  // }

function playRound(computerSelection, playerSelection) { 

  if (computerSelection === "rock" && playerSelection === "scissors") {
    addText(`You lose! ${computerSelection} beats ${playerSelection}!`);
    computerScore += 1;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    addText(`You lose! ${computerSelection} beat ${playerSelection}!`);
    computerScore += 1;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    addText(`You lose! ${computerSelection} beats ${playerSelection}!`);
    computerScore += 1;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    addText(`You win! ${playerSelection} beat ${computerSelection}!`);
    playerScore += 1;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    addText(`You win! ${playerSelection} beats ${computerSelection}!`);
    playerScore += 1;
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    addText(`You win! ${playerSelection} beats ${computerSelection}!`);
    playerScore += 1;
  } else if (computerSelection === playerSelection) {
    addText(`Tie!`);
  }
}


/*

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
*/