//! For loop =>

// Program to print first 500 numbers
for (let i = 1; i < 500; i++) {
  console.log(i);
}
/* 
Output: 
1
2
3
4
5
...
499
Explanation: The loop starts from 1 and increments by 1 until it reaches 499, printing each number. 
*/

// Program to add first n natural numbers
let sum = 0;
let n = 5; // First 5 natural numbers
for (let i = 1; i < n; i++) {
  sum += i;
}
console.log("Sum of first " + n + " natural numbers is " + sum);
// Output: Sum of first five numbers is 10
/* Explanation: The loop calculates the sum of first 5 natural numbers (1 + 2 + 3 + 4) and prints 10. */

// **************************************************************************

//! For in loop
let obj = {
  a: 90,
  b: 45,
  c: 34,
  d: 78,
};
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}
/* 
Output:
Marks of a are 90
Marks of b are 45
Marks of c are 34
Marks of d are 78
Explanation: The `for in` loop iterates over the keys of the object `obj`, printing each key-value pair. 
*/

// **************************************************************************

//! For of loop
for (let b of "Jayesh") {
  console.log(b);
}
/* 
Output:
J
a
y
e
s
h
Explanation: The `for of` loop iterates over each character of the string "Jayesh" and prints it one by one.
*/
