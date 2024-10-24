let x = function (e) {
  //e => Pointer Event
  console.log(e); //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  console.log(e.target); //<button id="btn">Click Me</button>
  // alert("Hello World 1");
};

btn.addEventListener("click", x);

let y = function (e) {
  console.log(e); //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  alert("Hello World 2");
};
btn.addEventListener("click", y);

// let a = prompt("What is your favorite number ? ");
// if (a == "2") {
//   btn.removeEventListener("click", x);
// }
