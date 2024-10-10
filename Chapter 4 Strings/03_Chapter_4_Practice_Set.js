/*
1) What will be the following print in Javascript ?
console.log("Jay\"".length)

2) Explore the includes, startsWith and endsWith functions of a string

3) Write a program to convert a given string to lowercase

4) Extract the amount out of this string
"Please give Rs 1000"

5) Try to change 4th character of a given String. Were you able to do it ?
*/

// Solution 1) =>

let str = "Jay\""
console.log(str.length); //4

// Solution 2) =>

const sentence = 'The quick brown fox jumps over the lazy dog.'
const word = 'fox';

console.log(sentence.includes(word)); // true
// includes()
console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`); // The word "fox" is in the sentence

// startsWith()
console.log(sentence.startsWith('The')); //true

// endsWith()
console.log(sentence.endsWith(".")); //true

// Solution 3) =>

console.log(sentence.toLowerCase()); //the quick brown fox jumps over the lazy dog.

// Solution 4) =>

let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice("Please give Rs ".length))
console.log(amount); //1000
console.log(typeof amount); //number

// Solution 5) =>

let friend = "Akshay"
friend[4] = "J"
console.log(friend); //Akshay
// NOTE: friend is not changed, because string is immutable