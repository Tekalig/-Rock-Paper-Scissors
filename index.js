function getComputerChoice() {
    // Array of choices
    const choices = ['rock', 'paper', 'scissors'];

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * choices.length);

    // Return the randomly chosen choice
    return choices[randomIndex];
}

console.log(getComputerChoice()); // Output: rock