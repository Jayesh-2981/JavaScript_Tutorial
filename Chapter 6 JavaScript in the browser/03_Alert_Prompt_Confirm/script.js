//!User Input and Conditional Logic

//* Alert to notify the user
alert("Enter the value of a!");
/* 
! Output: 
! A pop-up alert asking the user to enter a value for variable 'a'.
*/

//* Prompt to ask the user for input and set a default value
let a = prompt("Enter a here", "57");
/* 
! Output: 
! A prompt will appear asking the user to enter a value. 
! Default value is 57.
*/

//* Convert the input from string to number
a = Number.parseInt(a);
/* 
! Explanation: 
! The input from prompt is a string, so it is converted to a number using `Number.parseInt()`.
*/

//* Alert to display the type of variable 'a'
alert("You entered a of type " + typeof a);
/* 
! Output: 
! A pop-up alert displaying the type of 'a', which will be 'number' after conversion.
*/

//* Confirm dialog asking if the user wants to write the value to the page
let write = confirm("Do you want to write it to the page");
/* 
! Output: 
! A confirm dialog asking if the user wants to write the entered value to the page.
*/

//* Conditional statement to write the value of 'a' on the page based on user response
if (write) {
  document.write(a);
  /* 
  ! Output: 
  ! If the user presses "OK", the value of 'a' will be displayed on the page.
  */
} else {
  document.write("Please allow me to write");
  /* 
  ! Output: 
  ! If the user presses "Cancel", a message will be displayed: "Please allow me to write".
  */
}
