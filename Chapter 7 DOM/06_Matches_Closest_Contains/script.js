let id1 = document.getElementById("id1");
console.log(id1); // div#id1.box
console.log(id1.matches(".class")); //false
console.log(id1.matches(".box")); //true

let sp1 = document.getElementById("sp1");
console.log(sp1.closest("#sp1")); //span#sp1
console.log(id1.contains(sp1)); //true
console.log(sp1.contains(sp1)); //true
console.log(sp1.contains(id1)); //false
