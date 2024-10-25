//! For loop =>

//Program to print first 500 numbers

for (let i = 1; i < 500; i++) {
  console.log(i);
}

//Program to add first n natural numbers
let sum = 0;
let n = 5;
for (let i = 1; i < n; i++) {
  sum += i;
}
console.log("Sum of first " + n + " natural numbers is " + sum); //Sum of first five numbers is 10

// **************************************************************************

//! For in loop
let obj = {
  a: 90,
  b: 45,
  c: 34,
  d: 78,
};
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}

// **************************************************************************

//! For of loop
for (let b of "Jayesh") {
  console.log(b);
}
