// Exercise 1 - Guess the Number

/*
Write a JavaScript program to generate a random number and store it in a variable. 
The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.
100 => (No of guesses) is the score of the user.
The program is expected to terminate once the number is guessed. 
Number should be between 1-100.
*/

// Solution =>
let number = Math.floor(Math.random() * 100);

let totalGuesses = 0;
let userGuess = 0;

while (userGuess !== number) {
  userGuess = parseInt(prompt("Guess a number between 1n and 100 : "));
  totalGuesses++;

  if (userGuess > number) {
    alert("It's a greater number! Try again.");
  } else if (userGuess < number) {
    alert("It is a lesser number! Try again.");
  } else if (userGuess === number) {
    alert(`Congratulations! you did it ${totalGuesses} attempts.`);
  }
}
