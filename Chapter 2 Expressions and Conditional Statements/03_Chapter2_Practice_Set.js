//! Chapter 2 prcatice set

// Q 1) Use logical operators to find whether the age of a person lies between 10 and 20 ?
// Q 2) Demonstrate the use of switch case statements in javascript
// Q 3) Write a javascript program to find whether a number is divisible by 2 and 3.
// Q 4) Write a javascript program to find whether a number is divisible by either 2 or 3.
// Q 5) Print "You can Drive " or "You cannot drive" based on age being greater than 18 uding ternary operator.

//! Solution 1 =>

/* let age = 16
if (age > 10 && age < 20) {
    console.log("Your age lies between 10 and 20");
} else {
    console.log("Your age doesn't lies between 10 and 20");
} */

//! Solution 2 =>

let age = 12;
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

//! Solution 3=>

let num = 12;
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Number is divisible by 2 and 3");
} else {
  console.log("Number is not divisible by 2 or 3");
}

//! Solution 4=>

let num2 = 15;
if (num2 % 2 == 0 && num2 % 3 == 0) {
  console.log("Number is divisible by both 2 and 3");
} else if (num2 % 2 == 0) {
  console.log("Number is divisible by only 2");
} else if (num2 % 3 == 0) {
  console.log("Number is divisible by only 3");
} else {
  console.log("Number is not divisible by either 2 or 3");
}

//! Solution 5 =>

let input = 19;
let a = input > 18 ? "You can drive" : "You cannot drive";
console.log(a);
