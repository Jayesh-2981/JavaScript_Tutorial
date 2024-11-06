//! Console Methods

//* Logging a simple message
console.log("log"); // log in white color
/* 
! Output:
! log
* Explanation:
* `console.log()` prints the message to the console in white color.
*/

//* Logging information message
console.info("info"); // info in white color
/* 
! Output:
! info
* Explanation:
* `console.info()` logs an informational message to the console in white color.
*/

//* Logging a warning message
console.warn("warn"); // warn in yellow color
/* 
! Output:
! warn
* Explanation:
* `console.warn()` logs a warning message to the console in yellow color.
*/

//* Logging an error message
console.error("err"); // err in red color
/* 
! Output:
! err
* Explanation:
* `console.error()` logs an error message to the console in red color.
*/

//* Using `console.assert()` with a condition that is true
console.assert("err" != false);
/* 
! Output:
! No output (assertion passes)
* Explanation:
* `console.assert()` does not log anything if the condition is true.
*/

//* Using `console.assert()` with a condition that is false
console.assert("err" == false); // Assertion failed in yellow color
/* 
! Output:
! Assertion failed: "err" == false
* Explanation:
* `console.assert()` logs an assertion failure in yellow color if the condition is false.
*/

//* Measuring time for a for loop
console.time("forLoop"); // Start measuring time for the for loop
for (let i = 0; i < 5; i++) {
  console.log(123); // 5 times 123 in yellow color
}
/* 
! Output:
! 123 (printed 5 times)
* Explanation:
* `console.time()` starts measuring time. The loop executes 5 times and logs `123`.
*/

console.timeEnd("forLoop"); // forLoop: 2.62ms in white color
/* 
! Output:
! forLoop: 2.62ms
* Explanation:
* `console.timeEnd()` stops measuring time and logs the duration it took for the loop to execute.
*/

//* Measuring time for a while loop
console.time("WhileLoop"); // Start measuring time for the while loop
let i = 0;
while (i < 5) {
  console.log(123); // 5 times 123 in yellow color
  i++;
}
/* 
! Output:
! 123 (printed 5 times)
* Explanation:
* Similar to the for loop, but using a while loop instead. Logs `123` 5 times.
*/

console.timeEnd("WhileLoop"); // WhileLoop: 1.734ms in white color
/* 
! Output:
! WhileLoop: 1.734ms
* Explanation:
* `console.timeEnd()` logs the time taken for the while loop to execute.
*/

//* Displaying the console object itself
console.log(console); // Logs the entire console object to the console
/* 
! Output:
! [object Console]
* Explanation:
* `console.log(console)` logs the console object, which contains various methods for logging and debugging.
*/
