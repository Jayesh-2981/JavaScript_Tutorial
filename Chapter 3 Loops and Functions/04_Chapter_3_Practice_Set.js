//! Chapter 3 - Practice Set

// 1) Write a program to print the marks of a student in an object using a for loop
//    obj = { a: 98, b: 43, c: 34 }

// 2) Write a program in Q1) using for...in loop

// 3) Write a program to print 'Try again' until the user enters the correct Number.

// 4) Write a function to find the mean of 5 numbers

//*********************************************************************************

//! Solution 1 => Print marks using a for loop

let marks = {
  a: 98,
  b: 43,
  c: 34,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}
/*
Output:
The marks of a are 98
The marks of b are 43
The marks of c are 34
Explanation: 
The for loop iterates through each key in the `marks` object using `Object.keys(marks)`, and prints each student's mark.
*/

//! Solution 2 => Print marks using a for...in loop

for (const key in marks) {
  console.log("The marks of " + key + " are " + marks[key]);
}
/*
Output:
The marks of a are 98
The marks of b are 43
The marks of c are 34
Explanation: 
The for...in loop iterates through each key in the `marks` object directly, making it simpler and more readable.
*/

//! Solution 3 => Program to keep prompting until the correct number is entered
// Note: This solution will work in a browser environment, but not in VS Code directly.

let correctNumber = 4; // Define the correct number
let userInput;
while (userInput != correctNumber) {
  userInput = prompt("Enter a number"); // Prompt user to enter a number
}
console.log("You have entered the correct number");
/*
Output:
You have entered the correct number
Explanation: 
The loop continues to prompt the user until they enter the correct number. When the correct number is entered, it exits the loop and logs a success message.
Note: This will prompt indefinitely if the number entered is not correct, only ending when the user enters 4.
*/

//! Solution 4 => Function to calculate the mean of five numbers

const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5; // Calculate and return mean of five numbers
};

console.log("Mean of five numbers is: " + mean(1, 2, 3, 4, 5));
/*
Output:
Mean of five numbers is: 3
Explanation: 
The `mean` function takes five numbers, calculates the mean by summing them and dividing by 5, and logs the result.
*/
