//! Chapter 7 - Practice Set

/*
1) Create a navbar and change the color of its first element to red.

2) Create a table without tbody. Now use "view page source" button to check whether it has a tbody or not 

3) Create an element with 3 children. Now change the color of first and last element to green.

4) Write a javascript code to change background of all <li> tags to cyan.

5) Which of the following is used to look for the furthest ancestor that mathces a given CSS selector.
a) matches b) closest c) contains d) none of these
*/

//! Solution 1 =>
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

//! Solution 2 =>
// No, Because tbody get auto correctd

//! Solution 3 =>
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

//! Solution 4 =>
Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "cyan";
});

//! Solution 5 =>
// (d) None of these, note: closest method gives closest element not the furthest element
