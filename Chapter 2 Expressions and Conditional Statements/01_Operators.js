console.log("Operators in java");

//! Arithmetic Operator

// +    addition
// -    Subtraction
// *    Multiplication
// **   Exponential (a raised to the power of b)
// /    Division
// %    Modulus (remainder of division)
// ++   Increment
// --   Decrement

let a = 45; // Variable a is set to 45
let b = 4; // Variable b is set to 4
console.log("Arithmetic Operators : ");
console.log("a + b = ", a + b);
/* Output:
49 
This is the addition of a and b.
*/

console.log("a - b = ", a - b);
/* Output:
41 
This is the subtraction of b from a.
*/

console.log("a * b = ", a * b);
/* Output:
180 
This is the multiplication of a and b.
*/

console.log("a / b = ", a / b);
/* Output:
11.25 
This is the division of a by b.
*/

console.log("a ** b = ", a ** b);
/* Output:
4100625 
This is a raised to the power of b.
*/

console.log("a % b = ", a % b);
/* Output:
1 
This is the modulus (remainder) when a is divided by b.
*/

// The following increment and decrement operations are commented out
// console.log("++a = ", ++a); //46
// console.log("a++ = ", a++); //46
// console.log("--a = ", --a); //46
// console.log("a-- = ", a--); //46
// console.log("a = ", a); //45
// console.log("a-- = ", a--); //45

//! Assignment Operator

// =   x = y (assigns y to x)
// +=  x = x + y (adds y to x)
// -=  x = x - y (subtracts y from x)
// *=  x = x * y (multiplies x by y)
// /=  x = x / y (divides x by y)
// %=  x = x % y (assigns the remainder of x divided by y to x)
// **= x = x ** y (raises x to the power of y)

console.log("Assignment Operators : ");
let assignment = 5; // Variable assignment is initially 5
assignment += 5;
console.log("assignment += ", assignment);
/* Output:
10 
This adds 5 to assignment.
*/

assignment -= 5;
console.log("assignment -= ", assignment);
/* Output:
5 
This subtracts 5 from assignment.
*/

assignment *= 5;
console.log("assignment *= ", assignment);
/* Output:
25 
This multiplies assignment by 5.
*/

assignment /= 5;
console.log("assignment /= ", assignment);
/* Output:
5 
This divides assignment by 5.
*/

assignment **= 5;
console.log("assignment **= ", assignment);
/* Output:
3125 
This raises assignment to the power of 5.
*/

assignment %= 5;
console.log("assignment %= ", assignment);
/* Output:
0 
This assigns the remainder when assignment is divided by 5 to assignment.
*/

//! Comparison Operators

// ==  equal to
// !=  not equal to
// === equal value and type
// !== not equal value or not equal type
// >   Greater than
// <   Less than
// >=  Greater than or equal to
// <=  Less than or equal to
// ?   Ternary operator

console.log("Comparison operators : ");
let comp1 = 6; // Variable comp1 is set to 6
let comp2 = "6"; // Variable comp2 is set to the string "6"
let comp3 = 5; // Variable comp3 is set to 5
let comp4 = 4; // Variable comp4 is set to 4

console.log("comp1 == comp2", comp1 == comp2);
/* Output:
true 
comp1 and comp2 have the same value (after type coercion), so this returns true.
*/

console.log("comp1 != comp2", comp1 != comp2);
/* Output:
false 
comp1 and comp2 have the same value after type coercion, so this returns false.
*/

console.log("comp1 === comp2", comp1 === comp2);
/* Output:
false 
comp1 and comp2 have different types, so this returns false.
*/

console.log("comp1 !== comp2", comp1 !== comp2);
/* Output:
true 
comp1 and comp2 have different types, so this returns true.
*/

console.log("comp3 > comp4", comp3 > comp4);
/* Output:
true 
comp3 is greater than comp4, so this returns true.
*/

console.log("comp3 < comp4", comp3 < comp4);
/* Output:
false 
comp3 is not less than comp4, so this returns false.
*/

console.log("comp3 >= comp4", comp3 >= comp4);
/* Output:
true 
comp3 is greater than or equal to comp4, so this returns true.
*/

console.log("comp3 <= comp4", comp3 <= comp4);
/* Output:
false 
comp3 is not less than or equal to comp4, so this returns false.
*/

//! Logical Operators

// &&  Logical AND (true if both conditions are true)
// ||  Logical OR (true if at least one condition is true)
// !   Logical NOT (reverses the truthiness)

console.log("Logical operators : ");
let x = 5; // Variable x is set to 5
let y = 6; // Variable y is set to 6

console.log(x < y && x == 5);
/* Output:
true 
Both conditions are true, so the result is true.
*/

console.log(x > y || x == 5);
/* Output:
true 
At least one condition is true, so the result is true.
*/

console.log(!false);
/* Output:
true 
The NOT operator reverses the truthiness, so false becomes true.
*/

console.log(!true);
/* Output:
false 
The NOT operator reverses the truthiness, so true becomes false.
*/

// This is a single-line comment

/*
This is 
a multi-line 
comment 
*/
