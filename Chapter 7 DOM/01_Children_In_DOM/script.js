console.log(document.body.firstChild); // #text - logs the first child of the body (usually text node)
console.log(document.body.lastChild); // script - logs the last child of the body (usually script node)
console.log(document.body.childNodes); // NodeList(4) [text, div, text, script] - logs all child nodes of the body in a NodeList

// Convert NodeList to an Array
let arr = Array.from(document.body.childNodes);
console.log(arr); // (4) [text, div, text, script] - logs the converted array of child nodes
