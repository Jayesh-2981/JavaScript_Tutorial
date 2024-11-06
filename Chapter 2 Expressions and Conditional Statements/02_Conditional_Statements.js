let age = 17;
/*
let age = prompt("What's your age") => get input from console
alert("This is a valid age") => print a message
This will work on browser
*/

//! if
// Checking if the age is greater than 0
if (age > 0) {
  console.log("This is a valid age");
}
/* Output:
This is a valid age
Explanation: Since age is 17, it satisfies the condition age > 0.
*/

//! if else
// Checking if the age is greater than 18 for driving eligibility
if (age > 18) {
  console.log("This is a valid age for driving");
} else {
  console.log("This is not valid age for driving");
}
/* Output:
This is not valid age for driving
Explanation: Since age is 17, it is less than 18, so the else block is executed.
*/

//! if else if else
// Checking for different age categories for driving eligibility
if (age < 9) {
  console.log("You are a kid and you cannot even think of driving");
} else if (age < 18 && age >= 9) {
  console.log("You are a kid and you can think of driving after 18");
} else {
  console.log("You can now drive as you are above 18");
}
/* Output:
You are a kid and you can think of driving after 18
Explanation: Since age is 17, it satisfies the condition (age < 18 && age >= 9), so this block is executed.
*/

//! Ternary operator
// Using ternary operator to check driving eligibility
console.log("You can", age < 18 ? "not drive" : " drive");
/* Output:
You can not drive
Explanation: The ternary operator checks if age is less than 18, and since it is, "not drive" is printed.
*/
