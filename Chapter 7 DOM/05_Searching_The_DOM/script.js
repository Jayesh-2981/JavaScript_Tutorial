// Change card title color to red
let cardTitle = document.getElementsByClassName("card-title")[0];
cardTitle.style.color = "red";

let cardt = document.getElementById("firstCardTitle");
cardt.style.color = "blue";

let cTitles = document.querySelectorAll(".card-title");
cTitles[0].style.color = "red";
cTitles[1].style.color = "blue";
cTitles[2].style.color = "Green";
console.log(cTitles);

document.querySelector(".this").style.color = "white";
document.querySelector(".this").style.background = "red";

console.log(document.getElementsByTagName("card")); // NodeList(3) [h5#firstCardTitle.card-title, h5#firstCardTitle.card-title, h5#firstCardTitle.card-title]
console.log(document.querySelector(".card").getElementsByTagName("a")); //HTMLCollection [a.btn.btn-primary.this]
console.log(document.getElementsByName("hello")); //NodeList [input.form-control.me-2]
