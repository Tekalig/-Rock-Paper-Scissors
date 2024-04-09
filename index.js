let userScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');
let result = document.getElementsById('result');
let rock = document.getElementById('r');
let paper = document.getElementById('p');
let scissors = document.getElementById('s');
// console.log(userScore);
console.log(result.textContent)
function getComputerChoice() {
    // Array of choices
    const choices = ['rock', 'paper', 'scissors'];

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * choices.length);

    // Return the randomly chosen choice
    return choices[randomIndex];
}

// console.log(getComputerChoice()); // Output: rock
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        // won++;
        result.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        // lost++;
        result.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function playGame() {
    // Generate a random index
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice: rock, paper or scissors').toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    // console.log(`You won ${won} times and lost ${lost} times`);
}

// playGame();