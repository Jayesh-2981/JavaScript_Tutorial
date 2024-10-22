let name1 = "Jayesh";
console.log(name1); //Jayesh
console.log(name1.length); //6

let name2 = "Jayesh";
console.log(name2); //Jayesh

//Template literals
let boy1 = "Pramod";
let boy2 = "Nikhil";

let sentence = `${boy2} is a friend of ${boy1}`;
console.log(sentence); //Nikhil is a friend of Promod

//Escape Sequence Characters
// 1)   \'
let fruit = "Bana'na";
console.log(fruit); //Bana'na
console.log(fruit.length); //7
//      \"
let fruit2 = 'Bana"na';
console.log(fruit2); //Bana"na
console.log(fruit2.length); //7

// 2)   \n  new line
let name = "Jay\nesh";
console.log(name); //Jay => first line, esh => next line
console.log(name.length); //7

// 3)   \t  tab
let tab = "Jay\tesh";
console.log(tab); //Jay   esh
console.log(tab.length); //7

// 4)   \r  Carriage Return
let carriageReturn = "Jay\resh";
console.log(carriageReturn); //esh
console.log(carriageReturn.length); //7
