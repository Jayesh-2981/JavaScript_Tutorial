//! Chapter 5 - Practice Set

/*
1) Create an array of numbers and take input from the user to add numbers to this array.

2) Keep adding numbers to the array in 1 until 0 is added to the array

3) Filter for numbers divisible by 10 from a given array

4) Create an array of square of given numbers

5) Use reduce to calculate factorial of a given number from an array of first n natural numbers(n being the number where factorial needs to be calculated)
*/

//! 1) Solution =>
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//* Taking input from user and adding it to the array
let a = prompt("Enter a number"); // Example input: 5
a = Number.parseInt(a); // Converting the input to a number
arr.push(a); // Adding the number to the array
console.log(arr); //[1, 2, 3, 4, 5, 6, 7, 8, 5]
/*
 * Explanation:
 * The `prompt()` function takes input from the user and `push()` adds that number to the array.
 * The output shows the updated array with the added number.
 */

//! 2) Solution =>
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let b;
//* Keep adding numbers to the array until 0 is entered
do {
  b = prompt("Enter a number"); // Example input: loop until 0 is entered
  b = Number.parseInt(b); // Converting the input to a number
  arr2.push(b); // Adding the number to the array
} while (b != 0); // Loop stops when 0 is entered
console.log(arr2);
/*
 * Explanation:
 * The `do...while` loop keeps adding numbers to the array until the user enters 0.
 * Once 0 is entered, the loop stops, and the updated array is displayed.
 */

//! 3) Solution =>
let arr3 = [1, 20, 36, 50, 66, 70, 81];
//* Filtering numbers divisible by 10 from the array
let n = arr3.filter((x) => {
  return x % 10 == 0; // Filters numbers divisible by 10
});
console.log(n); // [ 20, 50, 70 ]
/*
 * Explanation:
 * The `.filter()` method creates a new array containing only the elements that are divisible by 10.
 * The result is displayed as `[ 20, 50, 70 ]`.
 */

//! 4) Solution =>
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8];
//* Creating an array of squares of the numbers
let square = arr4.map((x) => {
  return x * x; // Squares each number
});
console.log(square); // [ 1, 4, 9, 16, 25, 36, 49, 64 ]
/*
 * Explanation:
 * The `.map()` method creates a new array by applying a function (square operation) to each element.
 * The output is the array of squared numbers `[ 1, 4, 9, 16, 25, 36, 49, 64 ]`.
 */

//! 5) Solution =>
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
//* Using reduce to calculate the factorial of the numbers in the array
let natural = arr5.reduce((x1, x2) => {
  return x1 * x2; // Multiplies all the elements of the array
});
console.log(natural); // 40320
/*
 * Explanation:
 * The `.reduce()` method reduces the array to a single value by applying a multiplication operation to all the elements.
 * The result is the factorial of the first 8 natural numbers: `1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 = 40320`.
 */
