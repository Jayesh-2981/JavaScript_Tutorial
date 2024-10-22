**Chapter 3 - Loops and Functions**

- We use loops to perform repeated actions.
- For Example - If you are assigned a task of printing numbers from 1 to 100, it will be very hectic to do it mannually, Loops help us automate such tasks.

**_Types of loops in Javascript_**

1. for loop => loop a block of code no of times.
2. for in loop => loops through the keys of an Object.
3. for of loop => loops through the values of an Object.
4. while loop => loops a block based on a specific condition.
5. do -while loop => while loop variant which runs atleast once.

**_The for loop_**

- The syntax of a for loop looks something like this

  for(Statement 1; Statement 2; Statement 3){
  //code to be executed
  }

- Statement 1 is executed one time.
- Statement 2 is the condition base on which the loop runs (loop body is executed).
- Statement 3 is executed evrytime the loop body is executed.

Example : Program to print first 500 numbers

for (let i = 1; i < 500; i++) {
console.log(i);
}

---

**_The for in loop_**

- The syntax of for in loop looks like this

  for(key in object){
  //code to be executed
  }

Exmple :
let obj = {
a: 90,
b: 45,
c: 34,
d: 78
}
for (let a in obj) {
console.log("Marks of " + a + " are " + obj[a]);
}

---

**_The for of loop_**

- The syntax of for-of loop looks like this

  for(variable of iterable){
  //code
  //(iterable) => Iterable data structure like Arrays, Strings etc.
  }

- Example :
  for (let b of "Jayesh") {
  console.log(b)
  }

---

**_The while loop_**

- The syntax of while loop looks like this:
  while(condition){
  //code to be executed
  }

Note : If the condition never becomes false, the loop wiil never end and this might crash the function.

- Example :
  let n = 15;
  let i = 0;
  while (i <= n) {
  console.log(i);
  i++;
  }

---

**_The do-while loop_**

- The do while loop's syntax looks like this:
  do{
  //code to be executed => Executed at least once
  }

---

**_Functions in Javascript_**

- A javascript function is a block of code designed to perform a particular task.
- Syntax pf a function looks something like this:

  //Function without parameter
  function myFunc(){
  //code
  }
  myFunc() => Function invocation

  //Function with parameter
  function myFunc2(parameter 1, parameter 2){
  //code  
   //Here the parameter behaves like local variables.
  }
  myFunc2(1,2) => Function invocation

- Function invocation is a way to use the code inside the function
- A function can also return a value. The value is 'returned' back to the caller.

const sum =(a,b)=>{
let c = a+b;
return c; // Returns the sum
}

let y = sum(1,3)
consol.log(y) //prints 4
