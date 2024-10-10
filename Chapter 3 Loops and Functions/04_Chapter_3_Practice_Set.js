// Chapter 3 - Practice Set

// 1) Write a program to print the marks of a student in an object using for loop
//     obj = [a:98, b:43, c:34]

// 2) Write a program in Q1) using for in loop

// 3) Write a program to print 'Try again' until the user enters the correct Number.

// 4) Write a funtion to find mean of 5 numbers

//*********************************************************************************

// Solution 1) =>

let marks = {
    a: 98,
    b: 43,
    c: 34
}

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}
// Output: 
// The marks of a are 98
// The marks of b are 43
// The marks of c are 34

// Solution 2) =>

for (const key in marks) {
    console.log("The marks of " + key + " are " + marks[key]);
}

// Output:
// The marks of a are 98
// The marks of b are 43
// The marks of c are 34

// Solution 3) =>
//Below solution will not work on VS code or it will work on any browser.

let cn = 4;
let i;
while (i != cn) {
    i = prompt("Enter a number")
}
console.log("You have entered correct number");

// Output:
// You have entered correct number  

// Note:Only when you entered correct number if you not enter correct number then it will keep asking for infinity...

// Solution 4)=>

const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5
}

console.log('mean of five numbers is : ' + mean(1, 2, 3, 4, 5));

// Output:
// mean of five numbers is : 3