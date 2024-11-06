//! Selecting the first element with the class "container"
let a = document.getElementsByClassName("container")[0];

/*
 * Adding an `onclick` event listener to `a`
 * This function will change the inner HTML of the first "container" element
 * The new content will be "Hello World!"
 * Note: This inline JavaScript event has higher priority over an HTML `onclick` attribute.
 */
a.onclick = () => {
  //! Re-select the element (could also use `a.innerHTML = "Hello World!";` directly)
  let b = document.getElementsByClassName("container")[0];

  //! Update the HTML content of `b`
  b.innerHTML = "Hello World!"; // Sets the content of the container to "Hello World!"
};
