const changeBgColor = () => {
  document.body.firstElementChild.style.background = "yellow";
};

let a = document.body;
console.log("First child of a is : ", a.firstChild);
console.log("First Element child of a is : ", a.firstElementChild);
