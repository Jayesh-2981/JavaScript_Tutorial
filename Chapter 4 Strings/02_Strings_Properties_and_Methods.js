const name = "Jayesh";
console.log(name.length); //6

console.log(name.toUpperCase()); //JAYESH
console.log(name.toLowerCase()); //jayesh
console.log(name.slice(2, 4)); //ye
console.log(name.slice(2)); //yesh
console.log(name.replace("Jay", "Mah")); //Mahesh

let name1 = "Jayesh";
let friend = "Akshay";
console.log(name1.concat(" is a friend of ", friend, " Okay ?")); //Jayesh is a friend of Akshay Okay ?

let friend2 = "     Aditya     ";
console.log(friend2); //     Aditya
console.log(friend2.trim()); //Aditya
