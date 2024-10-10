console.log("Operators in java");
// 1) Arithmetic Operator

// +    addition
// -    Subrtraction
// *    Multiplication
// **   Exponential 
// /    Division
// %    Modulus
// ++   Increment
// --   Decrement

let a = 45
let b = 4
console.log("Arithmatic Operators : ");
console.log("a + b = ", a + b); //49
console.log("a - b = ", a - b); //41
console.log("a * b = ", a * b); //180
console.log("a / b = ", a / b); //11.25
console.log("a ** b = ", a ** b); //4100625 // a to the power b
console.log("a % b = ", a % b); //1
// console.log("++a = ", ++a); //46
// console.log("a++ = ", a++); //46
// console.log("--a = ", --a); //46
// console.log("a-- = ", a--); //46
// console.log("a = ", a); //45
// console.log("a-- = ", a--); //45

// 2) Assignment Operator

// =   x=y
// +=  x = x+y
// -=  x = x-y
// *=  x = x*y
// /=  x = x/y
// %=  x = x%y
// **= x = x**y

console.log("Assignment Operators : ");
let assignment = 5;
assignment += 5
console.log("assignment += ", assignment); //10
assignment -= 5
console.log("assignment -= ", assignment); //5
assignment *= 5
console.log("assignment *= ", assignment); //25
assignment /= 5
console.log("assignment /= ", assignment); //5
assignment **= 5
console.log("assignment **= ", assignment); //3125
assignment %= 5
console.log("assignment %= ", assignment); //0

// 3) Comparison Operators

// ==  equal to
// !=  not equal
// === equal value and type 
// !== not equal value or not equal type
// >   Greater than
// <   Less than
// >=  Greater than equal to
// <=  Less than equal to
// ?   Ternary operator

console.log("Comparison operators : ")
let comp1 = 6;
let comp2 = "6"
let comp3 = 5
let comp4 = 4

console.log("comp1 ==  comp2", comp1 == comp2); //true
console.log("comp1 !=  comp2", comp1 != comp2); //false
console.log("comp1 ===  comp2", comp1 === comp2); //false
console.log("comp1 !==  comp2", comp1 !== comp2); //true
console.log("comp3 >  comp4", comp3 > comp4); //true
console.log("comp3 <  comp4", comp3 < comp4); //false
console.log("comp3 >=  comp4", comp3 >= comp4); //true
console.log("comp3 <=  comp4", comp3 <= comp4); //false

// 4) Logical Operators

// &&  Logical and
// ||  logical or 
// !   logical not

console.log("Logical operators : ");
let x = 5;
let y = 6;
console.log(x < y && x == 5); //if both are true then output will be true
console.log(x > y || x == 5); // any one condtion is true then it returns true
console.log(!false); //true
console.log(!true); //false

// This is single line comment
/*
This is 
Multi line 
Comment */