let arr = [12, 123, 34, 5, 34];

//* Array map method - Iterates through the array, modifies elements based on the function provided
let a = arr.map((value, index, array) => {
  console.log(value, index, array); // Logs each value, index, and the whole array
  return value + index; // Adds the index to each value
});
console.log(a);
/*
! Output:
! 12 0 [ 12, 123, 34, 5, 34 ]
! 123 1 [ 12, 123, 34, 5, 34 ]
! 34 2 [ 12, 123, 34, 5, 34 ]
! 5 3 [ 12, 123, 34, 5, 34 ]
! 34 4 [ 12, 123, 34, 5, 34 ]
! [ 12, 124, 36, 8, 38 ]
* Explanation:
* `.map()` creates a new array with the results of calling a function for every element in the array.
* It accepts three arguments in the callback: `value` (current element), `index` (position of element), and `array` (the entire array).
*/

//* Array filter method - Filters the array based on the condition
let arr2 = [12, 3, 4, 56, 56, 346, 4];
let a2 = arr2.filter((a) => {
  return a < 10; // Returns elements less than 10
});
console.log(a2); //[ 3, 4, 4 ]
/*
! Output:
! [ 3, 4, 4 ]
* Explanation:
* `.filter()` creates a new array with all elements that pass the condition provided in the callback.
* It only includes values that are less than 10.
*/

//* Array Reduce method - Applies a function to all elements in the array, resulting in a single value
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

//* Using an anonymous function
// let newArray = arr3.reduce((h1, h2) => {
//     return h1 + h2; // Adds each element to the accumulator
// })

//* Using a separate function for reduce operation
const reduce_func = (h1, h2) => {
  return h1 + h2; // Adds the two values
};
let newArray = arr3.reduce(reduce_func);
console.log(newArray); // 36
/*
! Output:
! 36
* Explanation:
* `.reduce()` applies the `reduce_func` on the array elements from left to right, reducing it to a single value (sum of all numbers).
*/
