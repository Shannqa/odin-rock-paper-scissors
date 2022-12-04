/*

Algorithm:

- Computer makes a random getPlayerChoice.
- Player enters their getPlayerChoice in a prompt. 
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
let round = 0;

/* HTML elements */
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rounds = document.querySelector('.rounds');
const scores = document.querySelector('.scores');

rock.addEventListener('click', function () {getPlayerChoice ('rock');});
paper.addEventListener('click', function () {getPlayerChoice ('paper');});
scissors.addEventListener('click', function () {getPlayerChoice ('scissors');});

const h2 = document.createElement('h2');
h2.textContent = 'Round: ' + round;
rounds.appendChild(h2);


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

function getPlayerChoice (button) {
  playerSelection = button;
  console.log(playerSelection);
  playGame();
}

function playGame() {
    let computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection); 
    round += 1; 
    h2.textContent = 'Round: ' + round;
    getFinalScore();
} 

function playAgain() {
  rock.removeEventListener('click', function () {getPlayerChoice ('rock');});
  paper.removeEventListener('click', function () {getPlayerChoice ('paper');});
  scissors.removeEventListener('click', function () {getPlayerChoice ('scissors');});
}

function getFinalScore() {
  if (round === 5) {
    if (computerScore < playerScore) {
      getScore("Congratulations, you won!");
    } else if (computerScore > playerScore) {
      getScore ("Sorry, you lost!");
    } else {
      getScore ("It's a tie!");
    }
    getScore("Final result - Computer: " + computerScore + " Player: " + playerScore);
    rock.removeEventListener('click', function () {getPlayerChoice ('rock');});
    playAgain();
 }
}



function getScore(score) {
  const p = document.createElement('p');
  p.textContent = score;
  scores.appendChild(p);
}

function playRound(computerSelection, playerSelection) { 
  if (computerSelection === "rock" && playerSelection === "scissors") {
    getScore(`You lose! ${computerSelection} beats ${playerSelection}!`);
    computerScore += 1;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    getScore(`You lose! ${computerSelection} beat ${playerSelection}!`);
    computerScore += 1;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    getScore(`You lose! ${computerSelection} beats ${playerSelection}!`);
    computerScore += 1;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    getScore(`You win! ${playerSelection} beats ${computerSelection}!`);
    playerScore += 1;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    getScore(`You win! ${playerSelection} beats ${computerSelection}!`);
    playerScore += 1;
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    getScore(`You win! ${playerSelection} beats ${computerSelection}!`);
    playerScore += 1;
  } else if (computerSelection === playerSelection) {
    getScore(`Tie!`);
  }
}

