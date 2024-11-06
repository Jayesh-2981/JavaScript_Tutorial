let a = document.getElementsByTagName("div")[0]; // Select the first <div> element

/* 
// Adding content directly to 'a' 
a.innerHTML = a.innerHTML + "<h1>Hello World!</h1>";   
// Above line will create an <h1> tag inside the selected <div>
*/

// Creating a new <div> element and setting its inner HTML
let div = document.createElement("div");
div.innerHTML = "<h1>Hello World</h1>"; // This new div contains an <h1> element

//! node.append(e)
// Appends the new 'div' as the last child of 'a', adding it after any existing children
a.append(div);

//! node.prepend(e)
// Prepends the new 'div' as the first child of 'a', adding it before any existing children
a.prepend(div);

//! node.before(e)
// Inserts the new 'div' right before 'a' in the DOM structure
a.before(div);

//! node.after(e)
// Inserts the new 'div' immediately after 'a' in the DOM structure
a.after(div);

//! node.replaceWith(e)
// Replaces 'a' with the new 'div' in the DOM structure
a.replaceWith(div);
