console.log("Let, Const, Var");

// Using 'var' to declare a variable
var a = 45; // 'a' is initially 45
var a = "few"; // Redeclaring 'a' with a new value ("few")

// Using 'let' to declare a variable
let b = "Jayesh"; // 'b' is "Jayesh"

// Using 'const' to declare a constant
const author = "Jayesh"; // 'author' cannot be reassigned
// author = 4; // Error: constants can't be reassigned

// Reassigning 'b' because 'let' allows it
b = 4; // 'b' is now 4

// Declaring constant 'jerry'
const jerry = 0; // 'jerry' is a constant, cannot be reassigned

// Declaring variables 'c' and 'd'
let c = null; // 'c' is explicitly null
let d = undefined; // 'd' is undefined

// Block-scoped 'let' variable
{
  let b = "this"; // Local 'b' inside block
  console.log(b); // Logs "this"
}

// Outside block, global 'b' remains 4
console.log(b); // Logs 4
