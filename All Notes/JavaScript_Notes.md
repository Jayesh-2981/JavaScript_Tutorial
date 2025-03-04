<div>
<style>
  body {
    text-align: justify;
  }
</style>
</div>

<h1 style="text-align:center">JAVASCRIPT NOTES</h1>

## Chapter 1 - Variables and Data

<b>Just like we follow some rules while speaking english (The grammer), we have some rules to follow while writing a javascript program. The set of these rules is called syntax in javascript.</b>

### What is a variable ?

- A variable is a container that stores a value.
- The value of a javascript variable can be changed during the execution of a program.

  ```javascript
  var a = 7;
  let b = 7;
  const c = 7;
  ```

### Rules of Choosing variable names

- Letters, digits, underscores and $ sign allowed.
- Must begin with a `$`, `_` or a letter.
- Javascript reserverd words cannot be used as a variable name.
- Jayesh and jaYEsh are different variables (Case Sensitive).

### Var vs let vs const in javascript

- var is globally scoped while let and const are block scoped
- Var can be updated & redeclared within its scope
- let can be updated but not redeclared
- Const can neither be updated nor be re-declared
- Var variables are intialized with undefined whereas let and const variables are not initialized.
- Const must be intialized during declaration unlike let and var.

### Primitive Data types and objects

- Primitive data types are a set of basic datatypes in javascript.
- Object is a non primitive datatype in javascript.
- There are seven primitive datatypes in javascript
  null, number, string, symbol, undefined, boolean, BitInt

### Object

- An object in javascript can be created as follows.<br>

  ```javascript
  const item = {
    name: "LED Bulb",
    price: "150",
  };
  ```

## Chapter 2 - Expressions and Conditional Statements

<b> A fragment of code that produces a value is called an expression. Every value written literally is an expression
eg. 77 or "Jayesh". </b>

### Operators in Javascript

#### 1. Arithmetic Operators

<table border="1">
    <tr align="center">
        <th>Symbol</th>
        <th>Operator</th>
    </tr>
    <tr align="center">
        <td>+</td>
        <td>Addition</td>
    </tr>
    <tr align="center">
        <td>-</td>
        <td>Subtraction</td>
    </tr>
    <tr align="center">
        <td>*</td>
        <td>Multiplication</td>
    </tr>
    <tr align="center">
        <td>**</td>
        <td>Exponentition</td>
    </tr>
    <tr align="center">
        <td>/</td>
        <td>Division</td>
    </tr>
    <tr align="center">
        <td>%</td>
        <td>Modulus</td>
    </tr>
    <tr align="center">
        <td>++</td>
        <td>Increment</td>
    </tr>
    <tr align="center">
        <td>--</td>
        <td>Decrement</td>
    </tr>
</table>

#### 2. Assignment Operators

<table border="1">
  <thead>
    <tr align="center">
      <th>Operator</th>
      <th>Name</th>
      <th>Equivalent Expression</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><code>=</code></td>
      <td>Assignment Operator</td>
      <td><code>x = y</code></td>
      <td>Assigns the value of <code>y</code> to <code>x</code>.</td>
      <td><code>x = 5</code> (sets <code>x</code> to 5)</td>
    </tr>
    <tr align="center">
      <td><code>+=</code></td>
      <td>Addition Assignment</td>
      <td><code>x = x + y</code></td>
      <td>Adds <code>y</code> to <code>x</code> and assigns to <code>x</code>.</td>
      <td><code>x += 2</code> (<code>x = x + 2</code>)</td>
    </tr>
    <tr align="center">
      <td><code>-=</code></td>
      <td>Subtraction Assignment</td>
      <td><code>x = x - y</code></td>
      <td>Subtracts <code>y</code> from <code>x</code>.</td>
      <td><code>x -= 3</code> (<code>x = x - 3</code>)</td>
    </tr>
    <tr align="center">
      <td><code>*=</code></td>
      <td>Multiplication Assignment</td>
      <td><code>x = x * y</code></td>
      <td>Multiplies <code>x</code> by <code>y</code>.</td>
      <td><code>x *= 4</code> (<code>x = x * 4</code>)</td>
    </tr>
    <tr align="center">
      <td><code>/=</code></td>
      <td>Division Assignment</td>
      <td><code>x = x / y</code></td>
      <td>Divides <code>x</code> by <code>y</code>.</td>
      <td><code>x /= 2</code> (<code>x = x / 2</code>)</td>
    </tr>
    <tr align="center">
      <td><code>%=</code></td>
      <td>Modulus Assignment</td>
      <td><code>x = x % y</code></td>
      <td>Assigns the remainder of <code>x / y</code>.</td>
      <td><code>x %= 3</code> (<code>x = x % 3</code>)</td>
    </tr>
    <tr align="center">
      <td><code>**=</code></td>
      <td>Exponentiation Assignment</td>
      <td><code>x = x ** y</code></td>
      <td>Raises <code>x</code> to the power of <code>y</code>.</td>
      <td><code>x **= 2</code> (<code>x = x ** 2</code>)</td>
    </tr>
  </tbody>
</table>

#### 3. Comparison Operators

<table border="1">
  <thead>
    <tr align="center">
      <th>Operator</th>
      <th>Name</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><code>==</code></td>
      <td>Equal To</td>
      <td>Checks if two values are equal (type coercion allowed).</td>
      <td><code>5 == '5'</code> (returns <code>true</code>)</td>
    </tr>
    <tr align="center">
      <td><code>!=</code></td>
      <td>Not Equal</td>
      <td>Checks if two values are not equal (type coercion allowed).</td>
      <td><code>5 != '6'</code> (returns <code>true</code>)</td>
    </tr>
    <tr align="center">
      <td><code>===</code></td>
      <td>Strict Equal</td>
      <td>Checks if two values are equal and of the same type.</td>
      <td><code>5 === '5'</code> (returns <code>false</code>)</td>
    </tr>
    <tr align="center">
      <td><code>!==</code></td>
      <td>Strict Not Equal</td>
      <td>Checks if two values are not equal or not of the same type.</td>
      <td><code>5 !== '5'</code> (returns <code>true</code>)</td>
    </tr>
    <tr align="center">
      <td><code>&gt;</code></td>
      <td>Greater Than</td>
      <td>Checks if the left value is greater than the right value.</td>
      <td><code>7 &gt; 5</code> (returns <code>true</code>)</td>
    </tr>
    <tr align="center">
      <td><code>&lt;</code></td>
      <td>Less Than</td>
      <td>Checks if the left value is less than the right value.</td>
      <td><code>3 &lt; 5</code> (returns <code>true</code>)</td>
    </tr>
    <tr align="center">
      <td><code>&gt;=</code></td>
      <td>Greater Than or Equal To</td>
      <td>Checks if the left value is greater than or equal to the right value.</td>
      <td><code>5 &gt;= 5</code> (returns <code>true</code>)</td>
    </tr>
    <tr align="center">
      <td><code>&lt;=</code></td>
      <td>Less Than or Equal To</td>
      <td>Checks if the left value is less than or equal to the right value.</td>
      <td><code>5 &lt;= 6</code> (returns <code>true</code>)</td>
    </tr>
    <tr align="center">
      <td><code>?</code></td>
      <td>Ternary Operator</td>
      <td>Returns a value based on a condition: <code>condition ? value_if_true : value_if_false</code>.</td>
      <td><code>5 &gt; 3 ? 'Yes' : 'No'</code> (returns <code>'Yes'</code>)</td>
    </tr>
  </tbody>
</table>

#### 4. Logical Operators

1.  && logical and
2.  || logical not
3.  ! logical not

- Apart from these, we also have type and bitwise operators. Bitwise operators perform bit by bit operations of numbers.

### Comments in JavaScript

- Sometimes we want out programs to contain a text which is not executed by the JS engine.
- Such a text is called comment in JavaScript.
- A comment in JavaScript can be written as follows:

  ```javascript
  let a = 2; //This is single line Comment
  ```

  ```javascript
  /*
  I am a
  multiline comment
  */
  ```

- Sometimes comments are used to prevent the execution of some lines of code.

  ```javascript
  let switch = true;
  // switch = false; => Commented line won't execute.
  ```

### Conditional Statements

- Sometimes we might have to execute a block of code based off some condition.
- For example, a prompt might ask for the age of the user and if its greater than 18, display a special message.
- In javascript we have three forms of if...else statement

  - if statement
  - if...else statement
  - if...else if...else statement

#### If statement

- The if statement in javascript looks like this:

  ```javascript
  if (Condition) {
    //execute this code
  }
  ```

- The if statement evaluates the condition inside the ().
- If the condition is evaluated to true, the code inside the body of if is executed else the code is not executed.

#### if...else statement

- The if statement can have an optional else clause.
- The syntax looks something like this

  ```javascript
  if (condition) {
    //block of code if condition is true
  } else {
    // block of code if condtition is false
  }
  ```

- if the condition is true, code inside if is executed else code inside else block is executed.

#### if...else if...else statement

- sometimes we might want to keep recheking a set of conditions one by one until one matches.
- We use if elseif for achieving this.
- Syntax of if...elseif looks like this <br>

  ```javascript
    if (age>0) {
        consol.log("A valid age")

    }else if (age>10 %% age<18) {
        console.log("You are a kid")

    }else if (age>18) {
        console.log("You are an adult")

    }else {
        consol.log("invalid age")
    }
  ```

### Javascript Ternary Operator

- Evaluates a condition and executes a block of code based on the condition.

  ```javascript
  Condition ? exp1 : exp2;
  ```

- Example:-

  ```javascript
  marks > 10 ? "Yes" : "No";
  ```

## Chapter 3 - Loops and Functions

<b> We use loops to perform repeated actions. For Example - If you are assigned a task of printing numbers from 1 to 100, it will be very hectic to do it mannually, Loops help us automate such tasks. </b>

### Types of loops in Javascript

**1.** for loop => loop a block of code no of times.

**2.** for in loop => loops through the keys of an Object.

**3.** for of loop => loops through the values of an Object.

**4.** while loop => loops a block based on a specific condition.

**5.** do -while loop => while loop variant which runs atleast once.

### The for loop

- The syntax of a for loop looks something like this

  ```javascript
  for(Statement 1; Statement 2; Statement 3){
  //code to be executed
  }
  ```

- Statement 1 is executed one time.
- Statement 2 is the condition base on which the loop runs (loop body is executed).
- Statement 3 is executed evrytime the loop body is executed.

- Example : Program to print first 500 numbers

  ```javascript
  for (let i = 1; i < 500; i++) {
    console.log(i);
  }
  ```

### The for in loop

- The syntax of for in loop looks like this

  ```javascript
  for (key in object) {
    //code to be executed
  }
  ```

- Exmple :

  ```javascript
  let obj = {
    a: 90,
    b: 45,
    c: 34,
    d: 78,
  };
  for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a]);
  }
  ```

### The for of loop

- The syntax of for-of loop looks like this

  ```javascript
  for (variable of iterable) {
    //code
    //(iterable) => Iterable data structure like Arrays, Strings etc.
  }
  ```

- Example :

  ```javascript
  for (let b of "Jayesh") {
    console.log(b);
  }
  ```

### The while loop

- The syntax of while loop looks like this:

  ```javascript
  while (condition) {
    //code to be executed
  }
  ```

- **Note**: If the condition never becomes false, the loop wiil never end and this might crash the function.

- Example :

  ```javascript
  let n = 15;
  let i = 0;
  while (i <= n) {
    console.log(i);
    i++;
  }
  ```

### The do-while loop

- The do while loop's syntax looks like this:

  ```javascript
  do {
    //code to be executed => Executed at least once
  } while (condition);
  ```

### Functions in Javascript

- A javascript function is a block of code designed to perform a particular task.
- Syntax pf a function looks something like this:

  ```javascript
  //Function without parameter
  function myFunc(){
  //code
  }
  myFunc() // Function invocation

  //Function with parameter
  function myFunc2(parameter 1, parameter 2){
  //code
   //Here the parameter behaves like local variables.
  }
  myFunc2(1,2) // Function invocation
  ```

- Function invocation is a way to use the code inside the function
- A function can also return a value. The value is 'returned' back to the caller.

  ```javascript
  const sum = (a, b) => {
    let c = a + b;
    return c; // Returns the sum
  };

  let y = sum(1, 3);
  consol.log(y); //prints 4
  ```

## Chapter 4 - Strings

<b>Strings are used to store and manipulate text.</b>

- String can be created using the following syntax.

  ```javascript
  let name = "Jayesh"; //creates a string
  name.length; // This property prints the length of the string
  ```

- Strings can also be created using single quotes.

  ```javascript
  let name = "Jayesh";
  ```

### Template literals

- Template literals use backtics instead of quotes to define a string.

  ```javascript
  let name = `Jayesh`;
  ```

- With template literals, it is possible to use both single as well as double quotes inside a string.

  ```javascript
  let sentence = `The name 'is' "Jayesh"`;
  ```

- We can insert variables ditectly in template literal. This is called String interpolation.

  ```javascript
  let a = `This is ${name}`; //Prints This is Jayesh
  ```

### Escape Sequence Characters

- if you try to print the following string, javascript will misunderstand it

  ```javascript
  let name = 'Adam D'Angelo'
  ```

- We can use single quote escape sequence to solve the problem.

  ```javascript
  let name = "Adam D'Angelo";
  ```

- Similarly we can use `\"` inside a String with double quotes
- Other escape sequence characters are as follows
  1. `\n` => New line
  2. `\t` => Tab
  3. `\r` => Carriage Return

### String Properties and Methods

```javascript
- let name = "Jayesh"
  name.length //6

- let name = "Jayesh"
  name.toUpperCase() //JAYESH

- let name = "Jayesh"
  name.toLowerCase() //jayesh

- let name = "Jayesh"
  name.slice(2,4) //ye (from 2 tp 4, 4 not included)

- let name = "Jayesh"
  name.slice(2) //yesh (from 2 to end of the string)

- let name = "Jayesh Jadhav"
  let newName = name.replace("Jayesh","JD")

- let name1 = "Jayesh"
  let name2 = "Mahesh"
  let name3 = name1.concat(name2, "Yes") //We can even use + operator

- let name = " Jayesh "
  let newName = name.trim() //Jayesh//Removes whitespaces
```

- Strings are immutable.
- In order to access the character at an index we use the following syntax.

  ```javascript
  let name = "Jayesh";
  console.log(name[0]); //J
  console.log(name[1]); //a
  ```

## Chapter 5 - Arrays

<b>Arrays are variables which can hold more than one value. </b>

```javascript
const fruits = ["banana", "apple", "grapes"];
const a1 = [7, "Jayesh", false]; //can be different types
```

### Accessing Values

```javascript
let numbers = [1, 2, 7, 9];
numbers[0]; //1
numbers[1]; //2
```

### Finding the length

```javascript
let numbers = [1, 7, 9, 21];
numbers[0]; //1
numbers.length; //4
```

### Changing the values

```javascript
let numbers = [7, 2, 40, 9];
numbers[2] = 8; //"Numbers" now becomes [7,2,8,9]
```

- Arrays are mutable
- Arrays can be changed
- In JS, arrays are objects.
- The type of operator of arrays returns object.

  ```javascript
  const n = [1,7,9]
  type of n //returns "object"
  ```

- Arrays can hold many values under a single name.

### Array Methods

- There are some important array methods in JavaScript. Some of them are as follows:

1. **toString()** : converts an array to a string of comma separated values.

   ```javascript
   let n = [1, 7, 9];
   n.toString(); // 1,7,9
   ```

2. **join()** : joins all the array elements using a separator

   ```javascript
   let n = [7, 9, 13];
   n.join("-"); // 7-9-13
   ```

3. **pop()** : removes last element from the array

   ```javascript
   let n = [1, 2, 4];
   n.pop();
   ```

- updates the original array
- returns the popped value

4. **push()** : Adds a new element at the end of the array
   ```javascript
   let a = [7, 1, 2, 8];
   a.push(9);
   ```

- modifies the original array
- returns the new array length

5. **shift()** : removes the first element and returns it

   ```javascript
   let a = [7, 1, 2, 8];
   a.shift();
   ```

6. **unshift()** : Adds element to the begining, returns new array length

   ```javascript
   let a = [7, 1, 2, 8];
   a.unshift(5);
   ```

7. **delete()** : Array elements can be deleted using the delete operator, delete is an operator

   ```javascript
   let d = [1, 2, 3, 4];
   delete d[1];
   ```

8. **concat()** : Used to join arrays to the given array

   ```javascript
   let a1 = [1, 2, 3];
   let a2 = [4, 5, 6];
   let a3 = [7, 8, 9];
   a1.concat(a2, a3); // returns [1,2,3,4,5,6,7,8,9]
   ```

- returns a new array
- does not change existing arrays

9. **Sort()** : sort() method is used to sort an array alphabetically.

   ```javascript
   let a = [7, 9, 8];
   a.sort();
   ```

- a changes to [7,8,9]
- modifies the original array
- Sort() takes an optional compare function.
- If this function is provided as the first argument, the sort() function will consider these values as the basis of sorting.

10. **Splice()** : splice can be used to add new items to an array
    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    numbers.splice(2, 1, 23, 24);
    ```

- returns deleted items and modifies the array
- 2 : position to add
- 1 : No of elements to remove
- 23,23 : elements to be added

11. **Slice()** :

- slice out a piece from an array
- It creates a new array

  ```javascript
  const num = [1, 2, 3, 4];
  num.slice(2); //[3,4]
  num.slice(1, 3); //[2,3]
  ```

12. **reverse()** :

- reverses the elements in the source array

### Loops in Arrays

- Arrays can be looped through using the classical JavaScript for loops or through some other methods below.

1. **forEach loop**

- Calls a function, once for each array element

  ```javascript
  const a = [1, 2, 3];
  a.forEach((Value, index, array) => {
    //function logic
  });
  ```

2. **map()**

- Creates a new array be performing some operations on each array element.

  ```javascript
  const a = [1,2,3]
  a.map((value, index, array) => {
  return value\*value;
  });
  ```

3. **filter()**

- Filters an array with values that passes a test
- Creates a new array

  ```javascript
  const a = [1, 2, 3, 4, 5];
  a.filter(greater_than_5);
  ```

4. **reduce method**

- Reduces an array to a single value

  ```javascript
  const n = [1, 2, 3, 4, 5];
  let sum = numbers.reduce(add);
  ```

- sum => 1+2+3+4+5
- add => A function

5. **Array.from**

- used to create an array from any other object
  ```javascript
  Array.from("Jayesh");
  ```

6. **for...of**

- for of loop can be used to get the values from an array

7. **for...in**

- for in loop can be used to get the keys from an array

## Chapter 6 - JavaScript in the Browser

- JavaScript was initially created to make web pages alive. JS can be written right in a web page's HTML to make it interactive.
- The browser has an embedded engine called the JavaScript engine or the JavaScript runtime.
- JavaScript's ability in the browser is very limited to protect the user's safety.
- Eg. a webpage on http://goofle.com cannot access http://google.com and steal information from there.

### Developer Tools

- Every browser has some developer tools which makes a developer's life a lot easier.

- F12 on chrome opens Dev tools

- Elements => All HTML Elements
- Console => All the errors + logs
- Network => All network requests.

- We can also write JavaScript commands in the Console.

### The Script Tag

- The script tag is used to insert JavaScript into an HTML page.
- The Script tag can be used to insert external or internal scripts.

  ```javascript
  <script>alert("Hello")</script>
  ```

- **<center> OR </center>**

  ```javascript
  <script src="./script.js"></script>
  ```

- The benefit of a separate javascript file is that the browser will download it and store it its cache.

### Console Object Methods

- The console object has several methods, log being one of them. Some of them are as follows:

- **assert()** => used to assert a condition
- **clear()** => clears the console
- **log()** => outputs a message to the console
- **table()** => Displays a tabular data (can be used for objects in key value pairs)
- **warn()** => used for warnings
- **error()** => used for special information

- By using console.log(console) in browser we can see all the methods of console object.

  ```javascript
  Object [console] {
  log: [Function: log],
  warn: [Function: warn],
  error: [Function: error],
  dir: [Function: dir],
  time: [Function: time],
  timeEnd: [Function: timeEnd],
  timeLog: [Function: timeLog],
  trace: [Function: trace],
  assert: [Function: assert],
  clear: [Function: clear],
  count: [Function: count],
  countReset: [Function: countReset],
  group: [Function: group],
  groupEnd: [Function: groupEnd],
  table: [Function: table],
  debug: [Function: debug],
  info: [Function: info],
  dirxml: [Function: dirxml],
  groupCollapsed: [Function: groupCollapsed],
  Console: [Function: Console],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context],
  createTask: [Function: createTask]
  }

  ```

- comprehensive list can be looked up on MDN.

### Interaction : alert, prompt and confirm

- **alert** => Used to invoke a mini window with a message

```javascript
alert("hello");
```

- **prompt** => Used to take user input as String

```javascript
let input = prompt("Hii", "No");
```

- "No" : optional default value

- **confirm** => Shows a message and waits for the user to press OK or Cancel. Returns true for Ok and false for cancel.

- **Example :**

  ```javascript
  alert("Enter the value of a!"); // popup in startup
  let a = prompt("Enter a here", "57"); //ask value of a (By default it is 57)
  a = Number.parseInt(a); //convert String into number
  alert("You entered a of type " + typeof a); //Display type of a
  let write = confirm("Do you want to write it to the page"); // asks permission to write on page
  if (write) {
    document.write(a); //if yes then print the value of a
  } else {
    document.write("Please allow me to write"); //if no then print this message
  }
  ```

- The exact location and look is determined by the browser which is a limitation.

### Window object, BOM and DOM

- Window contains following things =>

1. DOM
2. BOM
3. Javascript Core

- Window object represents browser window and provides methods to control it.
- It is a global object.

### Document Object Model (DOM)

- Dom represents the page content as HTML
  - `document.body` => Page body as JS object
  - `document.body.style.background = "green"` => Changes page background to green

### Browser Object Model (BOM)

- The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.
- The functions alert/confirm/prompt are also a part of the BOM.
  `location.href = "https://google.com"` => Redirect to another URL

## Chapter 7 - Walking the DOM

- DOM tree refers to the HTML page where all the notes are objects.
- There can be 3 main types of nodes in the DOM tree :

1. text nodes
2. element nodes
3. comment nodes

- In a HTML page, `<html>` is at the root and `<head>` and `<body>` are its children, etc.

- A text node is always a leaf of the tree.

### Auto Correction

- If an erroneoud HTML is encountered by the browser, it tends to correct it.
- for example, if we put something after the body, it is automatically moved inside the body.
- Another example is `<table>` tag which must contain `<tbody>`

### Walking the DOM

```html
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    ...
  </body>
</html>
```

- `document.body` => page body tag
- `document.head` => page head tag
- `document.documentElement ` => page HTML tag

- **Note :** Document body can sometimes be null if the javascript is written before the body tag.

### Children of an Element

- Direct as well as deeply nested elements of an element are called its children.
- Child nodes => Elements that are direct children. for example, head and body are children of `<html>`
- Descendant nodes => All nested elements, childrens, there childrens and so on...

### firstChild, lastChild, childNodes

- `element.firstChild` => first child element
- `element.lastChild` => last child element
- `element.childNodes` => All child nodes

- Following is always true:

  - `elem.childNodes[0] === elem.firstChild`
  - `elem.childNodes[elem.childNodes.length -1 ] === elem.lastChild`

- There is also a method `elem.hasChildNodes()` to check whether there are any child nodes.

**Note**

- childNodes looks like an array.
- But its not actually an array but a collection.
- We can use Array from (Collection) to convert it into an array. **(Array methods will not work)**

### Notes on DOM Collections

- They are read-only
- They are live, elem.childNodes variable(reference) will automatically update if childNodes of elem is changed.
- They are iterable using for...of loop.

### Siblings and the Parent

- Siblings are nodes that are childrens of the same parent

- Example: `<head>` and `<body>` are siblings
- Siblings have same parent.
- In the above example its html

- `<body>` is said to be the "next" or "right" sibling of `<head>`, `<head>` is said to be the "previous" are "left" sibling of `<body>`

- The next sibling is in nextSibling property, and the previous one in previous sibling.
- The parent is available as parentNode.

- `alert(document.documentElement.parentNode);` //document
- `alert(document.documentElement.parentElement);` //null

### Element Only Navigation

- Sometimes, we dont want text or comment nodes.
- Some links only take Element notes into account.

- For Example :
- `document.previousElementSibling` => Previous sibling which is an element
- `document.nextElementSibling` => Next Sibling (Element)
- `document.firstElementChild` => First Element Child
- `document.lastElementChild` => Last Element Child

### Table Links

- Certain DOM elements may provide additional properties specific to there type for convenience.

- Table element supports the following properties:
- `table.rows` => Collection of `tr` elements
- `table.caption` => reference to `<caption>`
- `table.tHead` => regerence to `<thead>`
- `table.tFoot` => reference to `<tfoot>`
- `table.tBodies` => Collection of `<tbody>` elements
- `tbody.rows` => Collection of `<tr>` inside
- `tr.cells` => Collection of `td` and `th`
- `tr.sectionRowIndex` => Index of `tr` inside enclosing element
- `tr.rowIndex` => Row number starting from 0
- `td.cellIndex` => number of cells inside enclosing `<tr>`

### Searching the DOM

- DOM navigation properties are helpful when the elements are close to each other.
- If they are not close to each other, we have some more methods to search the DOM

#### 1. document.getElementById

- This method is used to get the element with a given "id" attribute.

```javascript
let span = document.getElementById("span");
span.style.color = "red";
```

#### 2. document.querySelectorAll

- Returns all elements inside an element matching the given CSS selector.

#### 3. document.querySelector

- Returns the first element for the given CSS Selector.
- A efficient version of `elem.querySelectorAll(CSS)[0]`

#### 4. document.getElementsByTagName

- Returns elements with the given tag name.

#### 5. document.getElementsByClassName

- Returns elements that have the given CSS class.

#### 6. document.getElementsByName

- Searches elements by the name attribute.

### Matches, Closest and Contains methods

- There are three important methods to search the DOM

1. `elem.matches(css)` => To check if elements matches the given CSS selector.
2. `elem.closest(css)` => To look for the nearest ancestor that mathces the given CSS selector. The element itself is also checked.
3. `elemA.Contains(elemB)` => Returns true if elemB is inside elemA (a descendant of elemA) or when elemA==elemB.

## Chapter 8 - Events & other DOM properties

### Console.dir function

- `Console.log` shows the element DOM tree.
- `Console.dir` shows the element as an object with its properties.

### tagName / nodeName

- Used to read tag name of an element
- tagName => only exists for Element nodes
- nodeName => defined for only node (text, comment, etc.)

### innerHTML and outerHTML

- The innerHTML property allows to get the HTML inside the element as a string. (Valid for element nodes only)
- The outerHTML property contains the full HTML innerHTML + the element itself.
- innerHTML is valid for element nodes. For other node types we can use nodeValue or data.

### textContent

- provides accedss to the text inside the element: only text, minus all tags.

### The hidden property

- The "hidden" attribute and the DOM property specifies whether the element is visible or not.

  ```html
  <div hidden>I am hidden</div>
  <div id="element">I can be hidden</div>
  <script>
    element.hidden = true;
  </script>
  ```

### Attribute Methods

1. `elem.hasAttribute(name`) => Method to check for existence of an attribute.
2. `elem.getAttribute(name)` => Method to used to get the value of an attribute.
3. `elem.setAttribute(name, value)` => Method used to set the value of an attribute.
4. `elem.removeAttribute(name)` => Method to remove the attribute from elem.
5. `elem.attributes` => Method to get the collection of all attributes.

### data-asterisk attributes

- We can always create custom attributes but the ones starting with "data-" are reserved for programmers use.
- They are available in a property named dataset.
- If an element has an attribute named "data-one", its available as element.dataset.one

### Insertion Methods

- We looked at some ways to insert elements in the DOM.
- Here is another way:

  ```javascript
  let div = document.createElement("div"); //Create
  div.className = "alert"; //set Class
  div.innerHTML = "<span>Hello</span>";
  document.body.append(div);
  ```

- Here are some more insertion methods:

1. `node.append(e)` => append at the end of node
2. `node.prepend(e)` => Insert at the begining of node
3. `node.before(e)` => Insert before node
4. `node.after(e)` => Insert after node
5. `node.replaceWith(e)` => replaces node with the given node

### insertAdjacentHTML/Text/Element

- This method is used to insert HTML.
- The first parameter is a code word, specifying where to insert.
- Must be one of the following:

1. `"beforebegin"` => Insert HTML immediately
2. `"afterbegin"` => Insert HTML into element at the begining
3. `"beforeend`" => Insert HTML into element at the end
4. `"afterend"` => Insert HTML immediately after element

- The second parameter is an HTML string

- Example :-

  ```html
  <div id="div"></div>
  <script>
    div.insertAdjacentHTML("beforebegin", "<p>Hello</p>");
    div.insertAdjacentHTML("afterend", "<p>Bye</p>");
  </script>
  ```

- The output would be :-

  ```html
  <p>Hello</p>
  <div id="div"></div>
  <p>Bye</p>
  ```

### Node removal

- To remove a node, there's a method `node.remove()`

  ```javascript
  let id1 = document.getElementById("id1");
  id1.remove();
  ```

### ClassName and ClassList

- If we assign something elem.className, it replaces the whole string of classes.
- Often we want to add/remove/toggle a single class

1. `elem.classList.add/remove("class")` => adds/removes a class
2. `elem.classList.toggle("class)` => adds the class if it doesn't exist, otherwise removes it.
3. `elem.classList.contains("class")` => Checks for the given class, returns true or false.

### setTimeout and setInterval

- setTimeout allows us to run a function once after the interval of time.

- Syntax of setTimeout is as follows:

  ```javascript
  let timerId = setTimeout(function,<delay>,<arg1>,<arg2>)
  ```

- timerId => returns a timer id
- `<delay>` => in ms

- clearTimeout is used to cancel the execution (in case we change our mind)

  ```javascript
  let timeId = setTimeout((c) => alert("never"), 1000);
  clearTimeout(timerId); // cancel the execution
  ```

- setInterval method has a similar syntax as setTimeout:

  ```javascript
  let timeId = setInterval(function, <delay>,<arg1>,<arg2>)
  ```

- All arguments have the same meaning. But unlike setTimeout, it runs the function not only once, but regulary after the given interval of time.

- To stop further calls, we can use `clearInterval(timerId)`

### Browser Events

- An event is a signal that something has happened.
- All the DOM nodes generate such signals.

- Some important DOM events are :-

  - **Mouse events** : Click, contact menu(right click), mouseover/mouseout, mousedown/mouseup, mousemove

  - **Keyboad events** : keydown and keyup

  - **form element events** : submit, focus etc.

  - **Document events** : DOMContentLoaded

### Handling Events

- Events can be handled through HTML attributes.

  ```html
  <input value="Hey" onclick="alert('hey')" type="button" />
  ```

- Events can also be handled through the onclick property

  ```javascript
  elem.onclick = function () {
    alert("Yes");
  };
  ```

- **Note** : Adding a handler with JavaScript overwrites the existing handler.

### addEventListener and removeEventListener

- addEventListener is used to assign multiple handlers to an event.

  `element.addEventListener(event, handler)`
  `element.removeEventListener(event, handler)` **(handler must be the same function object for this to work)**

### The Event Object

- When an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler.

  ```javascript
  elem.onclick = function(event){
  ...
  }
  ```

- `event.type` : Event type
- `event.currentTarget` : Element that handled the event
- `event.clientX/event.clientY` : Coordinates of the cursor
