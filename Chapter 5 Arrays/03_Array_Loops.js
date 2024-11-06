let num = [1, 4, 3, 5, 46, 7, 5, 5];

//* The traditional for loop (commented out)
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
/*
! Output:
! 1
! 4
! 3
! 5
! 46
! 7
! 5
! 5
* Explanation:
* The traditional `for` loop iterates over each index and prints the value at that index.
*/

//! forEach loop - Iterates over each element in the array
num.forEach((element) => {
  console.log(element);
});
/*
! Output:
! 1
! 4
! 3
! 5
! 46
! 7
! 5
! 5
* Explanation:
* `.forEach()` is an array method that executes a function on each element in the array.
*/

//! Array.from - Converts a string into an array of characters
let name = "Jayesh";
let arr = Array.from(name);
console.log(arr); // [ 'J', 'a', 'y', 'e', 's', 'h' ]
/*
! Output:
! [ 'J', 'a', 'y', 'e', 's', 'h' ]
* Explanation:
* `Array.from()` creates a new array instance from an iterable (like a string).
*/

//! for...of - Loops over the values of an iterable (array)
for (let i of num) {
  console.log(i);
}
/*
! Output:
! 1
! 4
! 3
! 5
! 46
! 7
! 5
! 5
* Explanation:
* `for...of` iterates over the values of an iterable (like an array) directly.
*/

//! for...in - Loops over the indices/keys of an object or array
for (let item in num) {
  // console.log(item) => it will give keys from 0 to num.length
  console.log(num[item]);
}
/*
! Output:
! 1
! 4
! 3
! 5
! 46
! 7
! 5
! 5
* Explanation:
* `for...in` iterates over the keys (indexes) of an array or properties of an object.
* In the case of an array, it gives the index values (from 0 to length-1).
*/
