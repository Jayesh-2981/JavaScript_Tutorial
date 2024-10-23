document.write("hello");

// let a = setTimeout(function () {
//   alert("I am inside a setTimeout");
// }, 2000);

// let b = prompt("Do you want to run the setTimeout?");
// if ("n" == b) {
//   clearTimeout(a); // Clears the timeout
// }

// console.log(a); //1 => timer id

const sum = (a, b, c) => {
  console.log("Yes I am Running " + (a + b + c));
  a + b + c;
};

setTimeout(sum, 1000, 1, 2, 7);

// setInterval(function () {
//   alert("setInterval");
// }, 3000);
