console.log("Solutions =>");

// 1) Create a string and try to add a number to it
let a = "Jayesh"; // String variable
let b = 9; // Number variable
console.log(a + b);
/* 
! Output:
! "Jayesh9" 
* Explanation: 
* The number 9 is automatically converted to a string and concatenated with "Jayesh".
*/

// 2) Use typeof operator to find the datatype of the result of string + number
console.log(typeof (a + b));
/* 
! Output:
! "string" 
* Explanation: 
* Since the result of string concatenation is a string, typeof returns "string".
*/

// 3) Create a const object. Can we change it to hold a number later?
const object = {
  name: "Jayesh", // key-value pair: name
  section: 1, // key-value pair: section
  isPrincipal: false, // key-value pair: isPrincipal
};

// object = "JD"; // Uncommenting this line will throw an error because the object itself is constant and cannot be reassigned.

// 4) Try to add a new key to the const object
object["name"] = "JD"; // Reassigning the 'name' key in the object
object["friend"] = "Akshay"; // Adding a new key-value pair to the object
console.log(object);
/* 
! Output:
! {
!   name: 'JD', 
!   section: 1, 
!   isPrincipal: false, 
!   friend: 'Akshay'
! } 
* Explanation: 
* The object reference cannot be reassigned, but its properties can be modified.
*/

// 5) Create a word-meaning dictionary of 5 words
const dict = {
  Hello: "Greeting", // word: meaning pair
  yakka: "work, especially hard work.", // word: meaning pair
  ataraxia: "a state of freedom from emotional disturbance and anxiety", // word: meaning pair
  solace: "comfort or consolation in a time of distress or sadness", // word: meaning pair
  serenity: "the state of being calm, peaceful, and untroubled", // word: meaning pair
};

console.log(dict);
/* 
! Output:
! {
!   Hello: 'Greeting',
!   yakka: 'work, especially hard work.',
!   ataraxia: 'a state of freedom from emotional disturbance and anxiety',
!   solace: 'comfort or consolation in a time of distress or sadness',
!   serenity: 'the state of being calm, peaceful, and untroubled'
! }
* Explanation: 
* The dictionary is created with 5 word-meaning pairs.
*/

// Accessing meaning of a word using dot notation
console.log(dict.yakka);
/* 
! Output:
! "work, especially hard work."
* Explanation: 
* Dot notation is used to access the meaning of "yakka".
*/

// Accessing meaning of a word using bracket notation
console.log(dict["yakka"]);
/* 
! Output:
! "work, especially hard work."
* Explanation: 
* Bracket notation is used to access the meaning of "yakka".
*/
