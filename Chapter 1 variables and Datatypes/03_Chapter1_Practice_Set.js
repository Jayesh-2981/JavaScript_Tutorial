// Q1) Create a variable of type string and try to add a number to it.
// Q2) Use typeof Operator to find the datatype of the String in last question.
// Q3) Create a const object in javascript. Can you change it to hold a number later?
// 04) Try to add a new key to the const object in problem 3.
// Q5) Write a js program to create a word-meaning dictionary of 5 words.

console.log("Solutions =>");
// 1)
let a = "Jayesh";
let b = 9;
console.log(a + b);

// 2)
console.log(typeof (a + b));

// 3)
const object = {
  name: "Jayesh",
  section: 1,
  isPrincipal: false,
};

//object = "JD" //Error

// 4)
object["name"] = "JD";
object["friend"] = "Akshay";
console.log(object);

// 5)
const dict = {
  Hello: "Greeting",
  yakka: "work, especially hard work.",
  ataraxia: " a state of freedom from emotional disturbance and anxiety",
};
console.log(dict);
console.log(dict.yakka);
console.log(dict["yakka"]);
