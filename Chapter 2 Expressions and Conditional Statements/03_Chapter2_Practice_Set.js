//! Chapter 2 Practice Set

// Q1) Use logical operators to find whether the age of a person lies between 10 and 20 ?
// Solution 1 =>
let age = 16; // Example age
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20");
} else {
  console.log("Your age doesn't lie between 10 and 20");
}
/* Output:
Your age lies between 10 and 20
Explanation: Since age is 16, it satisfies the condition 10 < age < 20, so the first block is executed.
*/

// Q2) Demonstrate the use of switch case statements in JavaScript
// Solution 2 =>
let age = 12; // Example age
switch (age) {
  case 12:
    console.log("Your age is 12");
    break;
  case 13:
    console.log("Your age is 13");
    break;
  case 14:
    console.log("Your age is 14");
    break;
  case 15:
    console.log("Your age is 15");
    break;
  default:
    console.log("Your age is not special");
}
/* Output:
Your age is 12
Explanation: Since age is 12, it matches the first case, so "Your age is 12" is printed.
*/

// Q3) Write a JavaScript program to find whether a number is divisible by 2 and 3.
// Solution 3 =>
let num = 12; // Example number
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Number is divisible by 2 and 3");
} else {
  console.log("Number is not divisible by 2 and 3");
}
/* Output:
Number is divisible by 2 and 3
Explanation: Since 12 is divisible by both 2 and 3, this message is printed.
*/

// Q4) Write a JavaScript program to find whether a number is divisible by either 2 or 3.
// Solution 4 =>
let num2 = 15; // Example number
if (num2 % 2 == 0 && num2 % 3 == 0) {
  console.log("Number is divisible by both 2 and 3");
} else if (num2 % 2 == 0) {
  console.log("Number is divisible by only 2");
} else if (num2 % 3 == 0) {
  console.log("Number is divisible by only 3");
} else {
  console.log("Number is not divisible by either 2 or 3");
}
/* Output:
Number is divisible by only 3
Explanation: Since 15 is divisible by 3 but not by 2, this message is printed.
*/

// Q5) Print "You can Drive" or "You cannot drive" based on age being greater than 18 using the ternary operator.
// Solution 5 =>
let input = 19; // Example age
let a = input > 18 ? "You can drive" : "You cannot drive";
console.log(a);
/* Output:
You can drive
Explanation: Since 19 is greater than 18, the ternary operator returns "You can drive".
*/
