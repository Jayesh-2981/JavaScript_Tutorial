//! Window and Document Object Model (DOM)

//* Logging the global window object
window.console.log(window);
/* 
! Output: 
! Logs the global `window` object in the console.
! `window` represents the browser window and contains global properties, methods, and objects.
*/

//* Logging the body element of the document
console.log(document.body);
/* 
! Output: 
! Logs the body element of the document to the console.
! This represents the <body> tag of the HTML document.
*/

//* Changing the background color of the body element to yellow
document.body.style.background = "yellow";
/* 
! Explanation: 
! This line accesses the body element of the document and modifies its inline style, 
! changing the background color to yellow.
*/
