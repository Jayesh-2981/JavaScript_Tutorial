let first = document.getElementById("first");

//! elem.getAttribute(name)
// Retrieve the value of the attribute "class" from the element
let a = first.getAttribute("class");
console.log(a); // hey

//! elem.hasAttribute(name)
// Check if the element has the attribute "class"
console.log(first.hasAttribute("class")); // true
// Check if the element has the attribute "style"
console.log(first.hasAttribute("style")); // false

//! elem.setAttribute(name, value)
// Add a new attribute "hidden" with the value "true" to the element
first.setAttribute("hidden", "true"); // it will add hidden = "true" in HTML
// Set new values for the "class" attribute, adding two classes "true" and "Sachin"
first.setAttribute("class", "true Sachin"); // It will add two classes true and Sachin in HTML

//! elem.removeAttribute(name)
// Remove the "class" attribute from the element
first.removeAttribute("class"); // will remove class

//! elem.attributes;
// Log all attributes of the element as a NamedNodeMap
console.log(first.attributes); // NamedNodeMap {0: id, 1: hidden, id: id, hidden: hidden, length: 2}

//! data-* attributes
// Log all custom data attributes (data-*)
console.log(first.dataset); // DOMStringMap {game: 'mario', player: 'Jayesh'}
// Access individual data attributes using dataset
console.log(first.dataset.game); // mario
console.log(first.dataset.player); // Jayesh
