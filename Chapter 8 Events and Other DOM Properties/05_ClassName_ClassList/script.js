let first = document.getElementById("first"); // Select the element with id "first"

/*
 * Working with class properties and methods on an element
 */

//! Setting the className property
first.className = "text-black red"; // Sets the entire class list of 'first' to "text-black red"
// This overwrites any existing classes and sets the element's classes to exactly these two: "text-black" and "red"

/*
 * Using classList methods for managing individual classes on an element
 */

//! Adding a class
first.classList.add("red"); // Adds "red" to the class list of 'first' if it’s not already present

//! Removing a class
first.classList.remove("red"); // Removes "red" from the class list of 'first' if it's present

//! Checking if a class exists
let hasRed = first.classList.contains("red"); // Returns true if 'first' contains the class "red", false otherwise
console.log(hasRed); // Outputs true or false depending on presence of "red" class

//! Toggling a class
first.classList.toggle("red"); // If 'first' has the class "red", it will remove it; otherwise, it will add "red" to the class list

/*
 * Summary of each method:
 * 1. `className` – directly sets or retrieves the full class attribute as a string.
 * 2. `classList.add()` – adds a specified class if it doesn’t already exist.
 * 3. `classList.remove()` – removes a specified class if it exists.
 * 4. `classList.contains()` – checks if the element has the specified class.
 * 5. `classList.toggle()` – toggles the specified class: adds if not present, removes if present.
 */
