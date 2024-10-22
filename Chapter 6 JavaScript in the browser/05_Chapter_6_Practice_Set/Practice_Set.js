// Chapter 6 - Practice Set
/*
1) Write a program using prompt

function to take input of age as a value from the user and tell him
if he can drive.

2) In Q 1) use confirm to ask the user
if he wants to see the prompt again.

3) In the previous question, user console.error to log the error
if the age entered is negative

4) Write a program to change the url to google.com(Redirection) if user enters a number greater than 4

5) Change the background of the page yellow, red or any other color based on user input through prompt
*/

// Solution 1, 2, 3 =>

let runAgain = true;
const canDrive = (age) => {
  return age >= 18 ? true : false;
};
while (runAgain) {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);

  if (age < 0) {
    console.error("please enter a valid age");
    break;
  }

  if (canDrive(age)) {
    alert("Yes you can drive!");
  } else {
    alert("You cannot drive!");
  }
  runAgain = confirm("Do you want to play again ?");
}

// Solution 4 =>

let number = prompt("Enter your number");
number = Number.parseInt(number);

if (number > 0) {
  location.href = "https://google.com";
}

// Solution 5 =>

let color = prompt("Enter the page background color");
document.body.style.background = color;
