console.log(document.body.firstChild); // #text
console.log(document.body.lastChild); // script
console.log(document.body.childNodes); //NodeList(4) [text, div, text, script]

let arr = Array.from(document.body.childNodes);
console.log(arr); //(4) [text, div, text, script]
