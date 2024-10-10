let age = 17
    // let age = prompt("Whats your age") => get input from console
    //alert("This is a valid age") => print a message 
    //This is will work on browser

// if
if (age > 0) {
    console.log("This is a valid age")
}

// if else
if (age > 18) {
    console.log("This is valid age for driving");
} else {
    console.log("This is not valid age for driving");
}

// if else if else
if (age < 9) {
    console.log("You are a kid and you cannot even think of driving");
} else if (age < 18 && age >= 9) {
    console.log("You are a kid and you can think of driving after 18");
} else {
    console.log("You can now drive as you are above 18");
}

//Ternary operator
console.log("You can", age < 18 ? "not drive" : " drive");