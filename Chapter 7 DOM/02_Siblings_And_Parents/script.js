console.log(document.body.firstChild);
// Logs the first child node of the body, which could be a text node or element

let a = document.body.firstChild;
console.log(a.parentNode);
// Logs the parent node of the first child. Typically, this will be the <body> element

console.log(a.parentElement);
// Logs the parent element of the first child. It’s usually the same as parentNode, but parentElement is more reliable for elements.

console.log(a.firstChild.nextSibling);
// Logs the next sibling of the first child’s first child. This could be another element or a text node.
