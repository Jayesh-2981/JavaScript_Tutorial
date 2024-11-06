//! Change card title color to red
let cardTitle = document.getElementsByClassName("card-title")[0];
cardTitle.style.color = "red"; // Changes the color of the first card title to red

let cardt = document.getElementById("firstCardTitle");
cardt.style.color = "blue"; // Changes the color of the card title with ID 'firstCardTitle' to blue

//! Change colors for multiple card titles
let cTitles = document.querySelectorAll(".card-title");
// Selects all elements with the class 'card-title'

cTitles[0].style.color = "red"; // Changes the color of the first card title to red
cTitles[1].style.color = "blue"; // Changes the color of the second card title to blue
cTitles[2].style.color = "Green"; // Changes the color of the third card title to green

console.log(cTitles);
/* Logs the NodeList of all elements with the 'card-title' class. 
   This will show an array-like structure of all the card title elements. */

//! Changes for first element with class "this"
document.querySelector(".this").style.color = "white"; // Changes the text color of the first element with class "this" to white
document.querySelector(".this").style.background = "red"; // Changes the background color of the first element with class "this" to red

//! Log the elements and collections
console.log(document.getElementsByTagName("card"));
/* Logs a NodeList of all <card> elements in the document. 
   Note: This is typically a custom element unless defined elsewhere in HTML */

console.log(document.querySelector(".card").getElementsByTagName("a"));
/* Selects the first element with the class 'card' and logs all <a> elements inside it.
   Returns an HTMLCollection of all anchor tags within the first card element */

console.log(document.getElementsByName("hello"));
/* Logs a NodeList of all elements with the name attribute 'hello'.
   This is often used for form elements, such as input fields. */
