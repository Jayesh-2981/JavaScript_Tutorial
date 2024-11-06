//! Chpater 4 - Practice Set

/* 
1) What will be the following print in Javascript?
console.log("Jay\"".length)

2) Explore the includes, startsWith and endsWith functions of a string.

3) Write a program to convert a given string to lowercase.

4) Extract the amount out of this string: "Please give Rs 1000"

5) Try to change the 4th character of a given String. Were you able to do it?
*/

//! Solution 1) =>

let str = 'Jay"';
console.log(str.length); // 4
/* 
  ! Output:
  ! 4
  * Explanation: 
  * The string "Jay\"" contains 4 characters: J, a, y, and a double quote. 
  * So, the `.length` property returns 4.
  */

//! Solution 2) =>

const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";

// * includes() method
console.log(sentence.includes(word)); // true
/* 
  ! Output:
  ! true
  * Explanation: 
  * The `.includes()` method checks if the word "fox" is present in the sentence, and returns `true`.
  */

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
); // The word "fox" is in the sentence
/* 
  ! Output:
  ! The word "fox" is in the sentence
  * Explanation: 
  * This output uses string interpolation to dynamically show if the word "fox" is in the sentence.
  */

// * startsWith() method
console.log(sentence.startsWith("The")); // true
/* 
  ! Output:
  ! true
  * Explanation: 
  * The `.startsWith()` method checks if the sentence starts with the word "The", which returns `true`.
  */

// * endsWith() method
console.log(sentence.endsWith(".")); // true
/* 
  ! Output:
  ! true
  * Explanation: 
  * The `.endsWith()` method checks if the sentence ends with a period, returning `true`.
  */

//! Solution 3) =>

console.log(sentence.toLowerCase()); // the quick brown fox jumps over the lazy dog.
/* 
  ! Output:
  ! the quick brown fox jumps over the lazy dog.
  * Explanation: 
  * The `.toLowerCase()` method converts all characters in the string to lowercase.
  */

//! Solution 4) =>

let str2 = "Please give Rs 1000";
let amount = Number.parseInt(str2.slice("Please give Rs ".length));
console.log(amount); // 1000
/* 
  ! Output:
  ! 1000
  * Explanation: 
  * The `.slice()` method extracts the part of the string after "Please give Rs " and `parseInt()` converts it to a number.
  */

console.log(typeof amount); // number
/* 
  ! Output:
  ! number
  * Explanation: 
  * We check the type of `amount` using `typeof`, which returns "number".
  */

//! Solution 5) =>

let friend = "Akshay";
friend[4] = "J";
console.log(friend); // Akshay
/* 
  ! Output:
  ! Akshay
  * Explanation: 
  * Strings in JavaScript are immutable, so assigning a value to `friend[4]` does not change the original string.
  */
