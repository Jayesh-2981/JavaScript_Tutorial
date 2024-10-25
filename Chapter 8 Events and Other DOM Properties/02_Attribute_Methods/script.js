let first = document.getElementById("first");
//! elem.getAttribute(name)
let a = first.getAttribute("class");
console.log(a); // hey

//! elem.hasAttribute(name)
console.log(first.hasAttribute("class")); // true
console.log(first.hasAttribute("style")); // false

//! elem.setAttribute(name, value)
first.setAttribute("hidden", "true"); //it will add hidden = "true" in html
first.setAttribute("class", "true Sachin"); //It will add two classes true and Sachin in html

//! elem.removeAttribute(name)
first.removeAttribute("class"); //will remove class

//! elem.attributes;
console.log(first.attributes); //NamedNodeMap {0: id, 1: hidden, id: id, hidden: hidden, length: 2}

//! data-* attributes
console.log(first.dataset); //DOMStringMap {game: 'mario', player: 'Jayesh'}
console.log(first.dataset.game); //mario
console.log(first.dataset.player); //Jayesh
