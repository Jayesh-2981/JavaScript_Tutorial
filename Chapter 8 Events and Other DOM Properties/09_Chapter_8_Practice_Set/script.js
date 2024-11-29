//! Chapter 8 - Practice Set

/*
1) Write a program to show different alerts when different buttons are clicked.

2) Create a website which is capable of storing bookmarks of your favorite websites using href.

3) Repeat Q2 using event listeners.

4) Create a glowing bulb effect using classList toggle method in JavaScript.
*/

//! Solution 1 - Show alerts when different buttons are clicked
/*
<button onclick="alert('please give me one plate of Chowmein')">Chow</button>
<button onclick="alert('please give me one plate of Vada Pow')">Pow</button>
<button onclick="alert('please give me one plate of Vada Wow')">Wow</button>
*/

//! Solution 2 - Website for bookmarks using href
/*
<h1>Bookmarks</h1>
<a href="https://google.com"><button id="google">Google</button></a>
<a href="https://facebook.com"><button id="facebook">Facebook</button></a>
<a href="https://instagram.com"><button id="instagram">Instagram</button></a>
*/

//! Solution 3 - Bookmarks with event listeners
/*
document.getElementById("google").addEventListener("click", function () {
  ! Redirects to Google
  window.location = "https://www.google.com";
  window.focus(); // Focuses on the new page
});

document.getElementById("facebook").addEventListener("click", function () {
  ! Redirects to Facebook
  window.location = "https://www.facebook.com";
  window.focus();
});

document.getElementById("instagram").addEventListener("click", function () {
  ! Redirects to Instagram
  window.location = "https://www.instagram.com";
  window.focus();
});
*/

//! Solution 4 - Glowing bulb effect using classList toggle
// HTML for the bulb element: <div id="bulb" class="bulb-container bulb"></div>

//! JavaScript for toggling the bulb class to create a glowing effect
setInterval(function () {
  //! Toggles the 'bulb' class to create a glowing effect every 200ms
  document.querySelector("#bulb").classList.toggle("bulb");
}, 200);
