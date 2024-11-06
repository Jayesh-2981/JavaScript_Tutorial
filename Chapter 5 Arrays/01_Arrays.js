//! Array Demonstration: Access, Modify, and Inspect Elements

//* Define an array with a mix of data types
let marks_class_12 = [91, 82, 63, 84, false, "absent"];

//* Display the entire array
console.log(marks_class_12);
/*
! Output:
! [ 91, 82, 63, 84, false, 'absent' ]
* Explanation:
* Logs the full array, containing numbers, a boolean, and a string.
*/

//* Access each element in the array individually by index
console.log(marks_class_12[0]); // 91
console.log(marks_class_12[1]); // 82
console.log(marks_class_12[2]); // 63
console.log(marks_class_12[3]); // 84
console.log(marks_class_12[4]); // false
console.log(marks_class_12[5]); // "absent"
console.log(marks_class_12[6]); // undefined
/*
! Output:
! 91
! 82
! 63
! 84
! false
! absent
! undefined
* Explanation:
* Each element is accessed by its index. Index 6 is undefined as it hasn't been assigned yet.
*/

//* Add a new element at index 6
marks_class_12[6] = 89;
console.log(marks_class_12[6]);
/*
! Output:
! 89
* Explanation:
* Adds 89 as a new element at index 6 in the array.
*/

//* Check the length of the array
console.log("The length of marks_class_12 is", marks_class_12.length);
/*
! Output:
! The length of marks_class_12 is 7
* Explanation:
* `.length` property now returns 7, accounting for the newly added element.
*/

//* Modify the first element in the array
marks_class_12[0] = 96;
console.log(marks_class_12[0]);
/*
! Output:
! 96
* Explanation:
* Updates the value at index 0 from 91 to 96.
*/

//* Check the data type of the array
console.log(typeof marks_class_12);
/*
! Output:
! object
* Explanation:
* Arrays in JavaScript are a specialized type of object, so `typeof` returns "object".
*/
