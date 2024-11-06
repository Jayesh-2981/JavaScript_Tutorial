//! String Methods Practice

//* Define a string
const name = "Jayesh";

//* Log the length of the string
console.log(name.length); // Output: 6
/* 
! Output:
! 6
* Explanation: 
* The `.length` property returns the total number of characters in the string "Jayesh".
*/

//* Convert the string to uppercase
console.log(name.toUpperCase()); // Output: JAYESH
/* 
! Output:
! JAYESH
* Explanation: 
* The `.toUpperCase()` method converts all characters in "Jayesh" to uppercase.
*/

//* Convert the string to lowercase
console.log(name.toLowerCase()); // Output: jayesh
/* 
! Output:
! jayesh
* Explanation: 
* The `.toLowerCase()` method converts all characters in "Jayesh" to lowercase.
*/

//* Use `slice` to get a substring from index 2 to 4
console.log(name.slice(2, 4)); // Output: ye
/* 
! Output:
! ye
* Explanation: 
* The `.slice(2, 4)` method extracts characters from index 2 up to (but not including) index 4.
*/

//* Use `slice` starting from index 2 to the end
console.log(name.slice(2)); // Output: yesh
/* 
! Output:
! yesh
* Explanation: 
* The `.slice(2)` method starts at index 2 and continues to the end of the string.
*/

//* Replace part of the string
console.log(name.replace("Jay", "Mah")); // Output: Mahesh
/* 
! Output:
! Mahesh
* Explanation: 
* The `.replace("Jay", "Mah")` method finds "Jay" and replaces it with "Mah", resulting in "Mahesh".
*/

//* Using `concat` to combine strings
let name1 = "Jayesh";
let friend = "Akshay";
console.log(name1.concat(" is a friend of ", friend, " Okay ?")); // Output: Jayesh is a friend of Akshay Okay ?
/* 
! Output:
! Jayesh is a friend of Akshay Okay ?
* Explanation: 
* The `.concat()` method combines `name1`, " is a friend of ", `friend`, and " Okay ?" into a single string.
*/

//* Working with whitespace using `trim()`
let friend2 = "     Aditya     ";
console.log(friend2); // Output: "     Aditya     "
/* 
! Output:
! "     Aditya     "
* Explanation: 
* The variable `friend2` includes whitespace around "Aditya".
*/

console.log(friend2.trim()); // Output: Aditya
/* 
! Output:
! Aditya
* Explanation: 
* The `.trim()` method removes whitespace from both sides of "     Aditya     ", resulting in "Aditya".
*/
