console.log("7 Primitive data types");

// Primitive data types

let a = null; // null
let b = 3763289; // number
let c = true; // boolean
let d = BigInt("346324"); // BigInt
let e = "Jayesh"; // string
let f = Symbol("I am a symbol"); // symbol
let g; // undefined

console.log(a, b, c, d, e, f, g);
// Output: null 3763289 true 346324n "Jayesh" Symbol(I am a symbol) undefined

console.log(typeof g); // Logs the type of 'g' (undefined)
// Output: undefined

console.log(); // Empty line for readability

console.log("Object in js or non - primitive data types in js");

// Non-primitive data types (Object in JS)
const item = {
  Jayesh: true, // key-value pair
  fjd: false, // key-value pair
  jd: 23, // key-value pair
  Akshay: undefined, // key-value pair
};

console.log(item["jd"]); // Logs the value associated with 'jd' (23)
// Output: 23
