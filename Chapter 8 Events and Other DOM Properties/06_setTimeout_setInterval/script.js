document.write("hello"); // Display "hello" on the document

/*
 * Example of using setTimeout and clearTimeout with user confirmation
 */

//! setTimeout to run a function after a delay
// let a = setTimeout(function () {
//   alert("I am inside a setTimeout"); // This alert would appear after 2 seconds if not cleared
// }, 2000);

//! Asking user whether to run setTimeout
// let b = prompt("Do you want to run the setTimeout?");
// if ("n" == b) {
//   clearTimeout(a); // Clears the timeout if the user enters "n"
//   // clearTimeout cancels the scheduled execution of the function
// }

//! Output the timer ID for setTimeout
// console.log(a); // Outputs the timer ID associated with setTimeout, which can be used to clear it

/*
 * Passing arguments to a function in setTimeout
 */

//! Defining a sum function with three arguments
const sum = (a, b, c) => {
  console.log("Yes I am Running " + (a + b + c)); // Logs the sum of a, b, and c
  a + b + c; // This calculation occurs but isn't used here
};

//! Using setTimeout with arguments
setTimeout(sum, 1000, 1, 2, 7); // Calls sum(1, 2, 7) after 1 second delay, passing 1, 2, and 7 as arguments

/*
 * Example of using setInterval to repeatedly execute a function
 */

//! setInterval to display an alert every 3 seconds
// setInterval(function () {
//   alert("setInterval"); // This alert would appear every 3 seconds
// }, 3000);
