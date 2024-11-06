const changeBgColor = () => {
  document.body.firstElementChild.style.background = "yellow";
  // This changes the background color of the first element child of the body to yellow.
};

let a = document.body;
console.log("First child of a is : ", a.firstChild);
// Logs the first child of the body, which could be a text node or an element.

console.log("First Element child of a is : ", a.firstElementChild);
// Logs the first element child of the body, which will be the first HTML element inside <body>, skipping any text nodes.
