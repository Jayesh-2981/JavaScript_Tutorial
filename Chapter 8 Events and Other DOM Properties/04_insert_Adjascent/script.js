let first = document.getElementById("first"); // Select the element with id "first"

/*
 * The insertAdjacentHTML() method inserts specified HTML into a specific position relative to the element.
 * Positions:
 * 1) "beforebegin" – Before the target element itself.
 * 2) "afterbegin"  – Inside the target element, before its first child.
 * 3) "beforeend"   – Inside the target element, after its last child.
 * 4) "afterend"    – After the target element itself.
 */

//! Inserting HTML at various positions relative to 'first'

// "beforebegin": Inserts the specified HTML before 'first'
first.insertAdjacentHTML("beforebegin", '<div class="test">Before Begin</div>');

// "beforeend": Inserts the specified HTML as the last child of 'first'
first.insertAdjacentHTML("beforeend", '<div class="test">Before End</div>');

// "afterbegin": Inserts the specified HTML as the first child of 'first'
first.insertAdjacentHTML("afterbegin", '<div class="test">After Begin</div>');

// "afterend": Inserts the specified HTML immediately after 'first'
first.insertAdjacentHTML("afterend", '<div class="test">After End</div>');

/*
 * Additional Examples:
 * Assuming there's another <div> element with the variable 'div', the following operations will insert content relative to 'div'.
 */

// Insert "<p>Hello</p>" right before the 'div' element itself
div.insertAdjacentHTML("beforebegin", "<p>Hello</p>");

// Insert "<p>Bye</p>" as the last child inside 'div'
div.insertAdjacentHTML("beforeend", "<p>Bye</p>");

//! Removing the 'first' element from the DOM
first.remove(); // This removes 'first' and all its child elements
