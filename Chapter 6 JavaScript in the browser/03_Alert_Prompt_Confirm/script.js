alert("Enter the value of a!") // popup in startup
let a = prompt("Enter a here", "57") //ask value of a (By default it is 57)
a = Number.parseInt(a) //convert String into number
alert("You entered a of type " + (typeof a)) //Display type of a
let write = confirm("Do you want to write it to the page") // asks permission to write on page
if (write) {
    document.write(a) //if yes then print the value of a
} else {
    document.write("Please allow me to write") //if no then print this message
}