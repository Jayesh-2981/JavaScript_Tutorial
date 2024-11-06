//! Accessing an element by ID and checking its class matching
let id1 = document.getElementById("id1");
console.log(id1);
/* 
Logs the element with ID 'id1'. 
In this case, it's a div element with the class 'box'. 
Example output: 
<div id="id1" class="box"></div>
*/

console.log(id1.matches(".class"));
/* 
Checks if the element 'id1' has the class 'class'. 
Returns false as 'id1' does not have this class.
Example output: 
false
*/

console.log(id1.matches(".box"));
/* 
Checks if the element 'id1' has the class 'box'. 
Returns true as 'id1' does have this class.
Example output: 
true
*/

//! Accessing a span and testing closest and contains methods
let sp1 = document.getElementById("sp1");
console.log(sp1.closest("#sp1"));
/* 
Finds the closest ancestor of 'sp1' (or the element itself) that matches the selector '#sp1'.
Since 'sp1' itself has the ID 'sp1', it returns the span with ID 'sp1'.
Example output: 
<span id="sp1"></span>
*/

console.log(id1.contains(sp1));
/* 
Checks if the 'id1' element contains the 'sp1' element as a child. 
Returns true if 'sp1' is inside 'id1', otherwise false.
In this case, it returns true since 'sp1' is inside 'id1'.
Example output: 
true
*/

console.log(sp1.contains(sp1));
/* 
Checks if the 'sp1' element contains itself. 
Since an element can always contain itself, this returns true.
Example output: 
true
*/

console.log(sp1.contains(id1));
/* 
Checks if the 'sp1' element contains the 'id1' element as a child. 
Returns false as 'sp1' is not inside 'id1'.
Example output: 
false
*/
