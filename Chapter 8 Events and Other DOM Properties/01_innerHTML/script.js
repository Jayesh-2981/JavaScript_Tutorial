let x = document.getElementsByTagName("span")[0];
console.log(x); //<span>Hey I am span</span>

// Console.dir function
console.dir(x); //span (Dropdown)

console.log("**********************************************************");

// tagName / nodeName
console.log(document.body.firstChild.nodeName); //#text
console.log(document.body.firstElementChild.nodeName); //SPAN

console.log("**********************************************************");

// innerHTML
/*
first.innerHTML
'<b>Hey</b> I am span'
first.innerHTML="<i>Hey I am Italian</i>"
'<i>Hey I am Italian</i>'
*/

console.log("**********************************************************");

// outerHTML
/*
first.outerHTML
'<span id="first"><b>Hey</b> I am span</span>'
first.outerHTML = "<div>Hey I am Div </div>"
'<div>Hey I am Div </div>'
*/

console.log("**********************************************************");

// textContent
console.log(document.body.textContent);
/* Output:
Hello World
Hey I am span
*/
/*
document.body.firstChild.data
'\n    Hello World\n    '
*/

console.log("**********************************************************");

// The hidden property
/*
first.hidden=false
false
*/
