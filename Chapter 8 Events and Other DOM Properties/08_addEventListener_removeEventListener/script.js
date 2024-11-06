//! Function `x` to handle the click event
let x = function (e) {
  //! `e` is a PointerEvent object with details about the event
  console.log(e); // Logs PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  console.log(e.target); // Logs the target element (in this case, the <button id="btn">Click Me</button>)

  // Optional alert (currently commented)
  // alert("Hello World 1");
};

//! Attaching `x` as a click event listener to the button with id `btn`
btn.addEventListener("click", x);

//! Function `y` to handle the click event
let y = function (e) {
  //! `e` is a PointerEvent object
  console.log(e); // Logs the PointerEvent with similar properties to function `x`

  alert("Hello World 2"); // Shows an alert when the button is clicked
};

//! Attaching `y` as a second click event listener to `btn`
btn.addEventListener("click", y);

//! Prompt to ask the user's favorite number
// let a = prompt("What is your favorite number?");

//! Conditional to remove the `x` event listener based on the user's input
// if (a == "2") {
//   btn.removeEventListener("click", x); // Removes the `x` function as a click listener if user input is "2"
// }
