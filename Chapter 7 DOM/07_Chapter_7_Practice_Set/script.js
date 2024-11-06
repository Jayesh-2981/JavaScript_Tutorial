//! Chapter 7 - Practice Set

/*
1) Create a navbar and change the color of its first element to red.

2) Create a table without tbody. Now use "view page source" button to check whether it has a tbody or not.

3) Create an element with 3 children. Now change the color of the first and last element to green.

4) Write a JavaScript code to change the background of all <li> tags to cyan.

5) Which of the following is used to look for the furthest ancestor that matches a given CSS selector?
a) matches 
b) closest 
c) contains 
d) none of these
*/

//! Solution 1 => Change the color of the first element in a navbar to red
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

//! Solution 2 =>
// No, Because tbody is automatically added in the page source if a table doesn't explicitly have it.

//! Solution 3 => Change the color of the first and last element of a parent (nav) to green
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

//! Solution 4 => Change the background color of all <li> tags to cyan
Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "cyan";
});

//! Solution 5 => Which method is used to look for the furthest ancestor that matches a given CSS selector?
// (d) None of these, note: closest method gives the closest element, not the furthest element
