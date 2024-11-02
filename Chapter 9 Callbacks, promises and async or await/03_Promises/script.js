// const { resolve } = require("path");

console.log("Hello");
let promise = new Promise((resolve) => {
  setTimeout((c) => resolve("done"), 1000);
});

promise.then(alert);
