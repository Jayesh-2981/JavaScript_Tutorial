// Function to print a greeting message
const hello = () => {
  console.log("Hii, I am Jayesh"); // Prints a greeting message to the console
};

// Function to calculate the average of two numbers
function average(x, y) {
  return (x + y) / 2; // Returns the average of x and y
}

// Arrow function to calculate the sum of two numbers
const sum = (p, q) => {
  return p + q; // Returns the sum of p and q
};

// Arrow function that returns a string "Hii"
const hii = () => {
  return "Hii"; // Returns the string "Hii"
};

let a = 1; // Initialize variable a
let b = 2; // Initialize variable b
let c = 3; // Initialize variable c

// Calculate and log the average of a and b
console.log("Average of a and b is ", average(a, b)); // 1.5
/* 
Output: 
Average of a and b is  1.5
Explanation: 
The average function calculates the average of 1 and 2, which is (1+2)/2 = 1.5.
*/

// Calculate and log the average of b and c
console.log("Average of b and c is ", average(b, c)); // 2.5
/* 
Output: 
Average of b and c is  2.5
Explanation: 
The average function calculates the average of 2 and 3, which is (2+3)/2 = 2.5.
*/

// Calculate and log the average of a and c
console.log("Average of a and c is ", average(a, c)); // 2
/* 
Output: 
Average of a and c is  2
Explanation: 
The average function calculates the average of 1 and 3, which is (1+3)/2 = 2.
*/

// Calculate and log the sum of 9 and 7
console.log(sum(9, 7)); // 16
/* 
Output: 
16
Explanation: 
The sum function adds 9 and 7, which gives 16.
*/

// Call the hello function to print a greeting message
hello(); // Hii, I am Jayesh
/* 
Output: 
Hii, I am Jayesh
Explanation: 
The hello function prints "Hii, I am Jayesh" to the console.
*/

// Store the result of the hii function in variable v
let v = hii();
// Log the result stored in v
console.log(v); // Hii
/* 
Output: 
Hii
Explanation: 
The hii function returns the string "Hii", which is stored in the variable v and logged to the console.
*/
