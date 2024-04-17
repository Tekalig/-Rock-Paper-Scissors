let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
let result = document.getElementById("result");

let count = 0;
let userWon = 0;
let computerWon = 0;

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.value);
  });
});

function getComputerChoice() {
  // Array of choices
  const choices = ["rock", "paper", "scissors"];

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * choices.length);

  // Return the randomly chosen choice
  return choices[randomIndex];
}

// console.log(getComputerChoice()); // Output: rock
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.style.color = "yellow";
    result.innerText = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    userWon++;
    userScore.innerText = userWon;
    result.style.color = "green";
    result.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerWon++;
    computerScore.innerText = computerWon;
    result.style.color = "red";
    result.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}
function playGame(playerSelection) {
  // Generate a random index
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  count++;
  if (count === 6) {
    if (computerWon > userWon) {
      result.style.color = "red";
      result.innerText = `Game Over \n Computer Won! \n Better Luck Next Time!`;
    } else if (computerWon < userWon) {
      result.style.color = "green";
      result.innerText = `Game Over \nYou Won! \n Congratulations!`;
    } else {
      result.style.color = "yellow";
      result.innerText = `Game Over \nIt's a tie! \n Play Again!`;
    }
    userWon = 0;
    computerWon = 0;
    count = 0;
  }
  userScore.innerText = userWon;
  computerScore.innerText = computerWon;
}
