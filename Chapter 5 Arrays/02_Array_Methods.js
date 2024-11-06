//! Array Methods

//* Defining the array
let num = [1, 2, 3, 4, 5];

//* 1) toString() - Converts array to a string
let b = num.toString();
console.log(typeof b); // string
console.log(b); // "1,2,3,4,5"
/*
! Output:
! string
! 1,2,3,4,5
* Explanation:
* The `.toString()` method converts the array to a comma-separated string.
*/

console.log("**************************************");

//* 2) join() - Joins elements with a custom separator
let c = num.join("_");
console.log(c, typeof c); // "1_2_3_4_5", string
/*
! Output:
! 1_2_3_4_5 string
* Explanation:
* The `.join("_")` method joins elements with "_" and returns a string.
*/

console.log("**************************************");

//* 3) pop() - Removes the last element
let r = num.pop();
console.log(num, r); // [1, 2, 3, 4] 5
/*
! Output:
! [1, 2, 3, 4] 5
* Explanation:
* The `.pop()` method removes the last element and returns it.
*/

console.log("**************************************");

//* Adding back an element
num[4] = 5;

//* 4) push() - Adds an element to the end
let s = num.push(56);
console.log(num, s); // [1, 2, 3, 4, 5, 56] 6
/*
! Output:
! [1, 2, 3, 4, 5, 56] 6
* Explanation:
* The `.push(56)` method adds 56 to the array and returns the new length.
*/

console.log("**************************************");

//* 5) shift() - Removes the first element
let t = num.shift();
console.log(t, num); // 1 [2, 3, 4, 5, 56]
/*
! Output:
! 1 [2, 3, 4, 5, 56]
* Explanation:
* The `.shift()` method removes the first element and returns it.
*/

console.log("**************************************");

//* 6) unshift() - Adds an element to the beginning
let u = num.unshift(78);
console.log(u, num); // 6 [78, 2, 3, 4, 5, 56]
/*
! Output:
! 6 [78, 2, 3, 4, 5, 56]
* Explanation:
* The `.unshift(78)` method adds 78 to the start and returns the new length.
*/

console.log("**************************************");

//* 7) delete - Deletes an element, leaving `undefined`
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
delete num1[0];
console.log(num1); // [ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(num1.length); // 9
/*
! Output:
! [ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ]
! 9
* Explanation:
* `delete` removes the element but does not adjust array length.
*/

console.log("**************************************");

//* 8) concat() - Merges arrays
let num2 = [10, 11, 12];
let num3 = [13, 14, 15];
let newArray = num1.concat(num2);
console.log(newArray); // [ <1 empty item>, 2, 3, ..., 15 ]
/*
! Output:
! [ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
* Explanation:
* `.concat()` merges `num1` and `num2`, preserving `undefined` items.
*/

console.log("**************************************");

//* 9) sort() - Sorts elements alphabetically or by custom logic
let arr = [4, 3, 5, 33, 5, 1, 2];
arr.sort();
console.log(arr); // [1, 2, 3, 33, 4, 5, 5]
/*
! Output:
! [1, 2, 3, 33, 4, 5, 5]
* Explanation:
* `.sort()` sorts values lexicographically. Use a compare function for numerical sorting.
*/

let compare = (m, n) => m - n;
let arr2 = [3, 34, 25, 67, 45, 4, 632, 6];
arr2.sort(compare);
console.log(arr2); // [3, 4, 6, 25, 34, 45, 67, 632]
/*
! Output:
! [3, 4, 6, 25, 34, 45, 67, 632]
* Explanation:
* With `compare`, `.sort()` sorts numerically in ascending order.
*/

console.log("**************************************");

//* 10) reverse() - Reverses array elements
num1.reverse();
console.log(num1); // [9, 8, ..., <1 empty item>]
/*
! Output:
! [9, 8, 7, 6, 5, 4, 3, 2, <1 empty item>]
* Explanation:
* `.reverse()` inverts the order of elements in `num1`.
*/

console.log("**************************************");

//* 11) splice() - Adds/removes elements at specified index
let num4 = [1, 2, 3, 4, 5, 6, 7, 8];
num4.splice(2, 3, 10, 11, 12, 13, 14);
console.log(num4); // [1, 2, 10, 11, 12, 13, 14, 6, 7, 8]
/*
! Output:
! [1, 2, 10, 11, 12, 13, 14, 6, 7, 8]
* Explanation:
* `.splice(2, 3, ...)` removes 3 elements starting at index 2 and adds new elements.
*/

console.log("**************************************");

//* 12) slice() - Extracts elements from an index range
let num5 = [1, 2, 3, 4, 5, 6, 7, 8];
let newNum = num5.slice(3);
console.log(newNum); // [4, 5, 6, 7, 8]
/*
! Output:
! [4, 5, 6, 7, 8]
* Explanation:
* `.slice(3)` extracts elements from index 3 to the end.
*/

let newNum2 = num5.slice(3, 6);
console.log(newNum2); // [4, 5, 6]
/*
! Output:
! [4, 5, 6]
* Explanation:
* `.slice(3, 6)` extracts elements from index 3 up to (but not including) index 6.
*/
