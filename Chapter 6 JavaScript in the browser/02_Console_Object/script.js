console.log("log"); //log in white color
console.info("info"); //info in white color
console.warn("warn"); //warn in yellow color
console.error("err"); //err in red color
console.assert("err" != false)
console.assert("err" == false) //Assertion failed in yellow color

console.time("forLoop")
for (let i = 0; i < 5; i++) {
    console.log(123); //5 times 123 in yellow color
}
console.timeEnd("forLoop") // forLoop: 2.62ms in white color

console.time("WhileLoop")
let i = 0;
while (i < 5) {
    console.log(123); // 5 times 123 in yellow color
    i++
}
console.timeEnd("WhileLoop") // WhileLoop: 1.734ms in white color

console.log(console);