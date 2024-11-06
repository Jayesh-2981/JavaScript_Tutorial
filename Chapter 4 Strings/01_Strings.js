// * Initialize a string variable
let name1 = "Jayesh";
console.log(name1); // Jayesh
/* 
! Output:
! Jayesh
* Explanation: 
* The variable `name1` is initialized with the string "Jayesh" and logged to the console.
*/

console.log(name1.length); // 6
/* 
! Output:
! 6
* Explanation: 
* The `.length` property returns the number of characters in the string "Jayesh", which is 6.
*/

// * Initialize another string variable
let name2 = "Jayesh";
console.log(name2); // Jayesh
/* 
! Output:
! Jayesh
* Explanation: 
* The variable `name2` is also initialized with "Jayesh" and logged to the console.
*/

//! Template Literals
let boy1 = "Pramod";
let boy2 = "Nikhil";

// * Using template literals to format a sentence
let sentence = `${boy2} is a friend of ${boy1}`;
console.log(sentence); // Nikhil is a friend of Pramod
/* 
! Output:
! Nikhil is a friend of Pramod
* Explanation: 
* Template literals allow us to embed expressions, creating a dynamic string. Here, `${boy2}` and `${boy1}` insert their values in the sentence.
*/

//! Escape Sequence Characters

// * 1) Using \' to include a single quote in a string
let fruit = "Bana'na";
console.log(fruit); // Bana'na
/* 
! Output:
! Bana'na
* Explanation: 
* The escape sequence `\'` is used to include an apostrophe within the string without ending it.
*/

console.log(fruit.length); // 7
/* 
! Output:
! 7
* Explanation: 
* The `.length` property counts each character in "Bana'na", resulting in a length of 7.
*/

// * Using \" to include a double quote in a string
let fruit2 = 'Bana"na';
console.log(fruit2); // Bana"na
/* 
! Output:
! Bana"na
* Explanation: 
* The escape sequence `\"` allows us to include double quotes in the string.
*/

console.log(fruit2.length); // 7
/* 
! Output:
! 7
* Explanation: 
* The `.length` property counts each character in "Bana\"na", resulting in a length of 7.
*/

// * 2) \n New Line
let name = "Jay\nesh";
console.log(name); // Jay => first line, esh => next line
/* 
! Output:
! Jay
! esh
* Explanation: 
* The `\n` escape sequence inserts a new line between "Jay" and "esh".
*/

console.log(name.length); // 7
/* 
! Output:
! 7
* Explanation: 
* The `.length` property counts all characters, including `\n`, resulting in a length of 7.
*/

// * 3) \t Tab
let tab = "Jay\tesh";
console.log(tab); // Jay   esh
/* 
! Output:
! Jay   esh
* Explanation: 
* The `\t` escape sequence adds a tab space between "Jay" and "esh".
*/

console.log(tab.length); // 7
/* 
! Output:
! 7
* Explanation: 
* The `.length` property includes the tab space in the count, resulting in 7.
*/

// * 4) \r Carriage Return
let carriageReturn = "Jay\resh";
console.log(carriageReturn); // esh
/* 
! Output:
! esh
* Explanation: 
* The `\r` escape sequence moves the cursor to the start of the line, so only "esh" is displayed.
*/

console.log(carriageReturn.length); // 7
/* 
! Output:
! 7
* Explanation: 
* The `.length` property counts each character, including `\r`, resulting in a length of 7.
*/
