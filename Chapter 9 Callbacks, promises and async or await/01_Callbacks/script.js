//! Syncronous Programming
/*
let a = prompt("what is your name?");
let b = prompt("What is your age ?");
let c = prompt("what is your favorite color ?");
console.log(a + " is " + b + " years old and has " + c + " favorite color.");
*/

console.log(
  "********************************************************************"
);

//! Asyncronous Programming
/*
console.log("start");
setInterval(function () {
  console.log("Hey I am good");
}, 3000);
console.log("end");
*/

console.log(
  "********************************************************************"
);

//! Callbacks
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("SRC: " + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error loading script with src : " + src);
    callback(new Error("src got some error"));
  };
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("Hello World ! " + src);
}

function goodMorning(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("GoodMorning ! " + src);
}

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  hello
);
