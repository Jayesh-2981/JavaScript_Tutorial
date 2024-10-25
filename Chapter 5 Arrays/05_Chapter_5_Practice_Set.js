//! Chapter 5 - Practice Set

/*
1) Create an array of numbers and take input from the user to add numbers to this array.

2) Keep adding numbers to the array in 1 until 0 is added to the array

3) Filter
for numbers divisible by 10 from a given array

4) Create an array of square of given numbers

5) Use reduce to calculate factorial of a given number form an array of first n natural numbers(n being the numbers where factorial needs to be calculated)
*/

//! 1) Solution =>
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let a = prompt("Enter a number"); //5
a = Number.parseInt(a);
arr.push(a);
console.log(arr); //[1, 2, 3, 4, 5, 6, 7, 8, 5]

//! 2) Solution =>

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let b;
do {
  b = prompt("Enter a number"); //loop will iterate until you enter number as 0
  b = Number.parseInt(b);
  arr2.push(b);
} while (b != 0);
console.log(arr2);

//! 3) Solution =>

let arr3 = [1, 20, 36, 50, 66, 70, 81];
let n = arr3.filter((x) => {
  return x % 10 == 0;
});
console.log(n); // [ 20, 50, 70]

//! 4) Solution =>

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8];
let square = arr4.map((x) => {
  return x * x;
});
console.log(square); // [ 1, 4, 9, 16, 25, 36, 49, 64]

//! 5) Solution =>
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
let natural = arr5.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(natural); //40320
