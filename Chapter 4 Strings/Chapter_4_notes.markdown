**Chapter 4 - Strings**

- Strings are used to store and manipulate text.
- String can be created using the following syntax.

  let name = "Jayesh" //creates a string
  name.length // This property prints the length of the string

- Strings can also be created using single quotes.

  let name = 'Jayesh'

**_Template literals_**

- Template literals use backtics instead of quotes to define a string.

  let name = `Jayesh`

- With template literals, it is possible to use both single as well as double quotes inside a string.

  let sentence = `The name 'is' "Jayesh"`

- We can insert variables ditectly in template literal. This is called String interpolation.

  let a = `This is ${name}` //Prints `This is Jayesh`

**_Escape Sequence Characters_**

- if you try to print the following string, javascript will misunderstand it

  let name = 'Adam D'Angelo'

- We can use single quote escape sequence to solve the problem.

  let name = 'Adam D\'Angelo'

- Similarly we can use \" inside a String with double quotes
- Other escape sequence characters are as follows
  1. \n => New line
  2. \t => Tab
  3. \r => Carriage Return

**_String Properties and Methods_**

1. let name = "Jayesh"
   name.length //6

2. let name = "Jayesh"
   name.toUpperCase() //JAYESH

3. let name = "Jayesh"
   name.toLowerCase() //jayesh

4. let name = "Jayesh"
   name.slice(2,4) //ye (from 2 tp 4, 4 not included)

5. let name = "Jayesh"
   name.slice(2) //yesh (from 2 to end of the string)

6. let name = "Jayesh Jadhav"
   let newName = name.replace("Jayesh","JD")

7. let name1 = "Jayesh"
   let name2 = "Mahesh"
   let name3 = name1.concat(name2, "Yes") //We can even use + operator

8. let name = " Jayesh "
   let newName = name.trim() //Jayesh//Removes whitespaces

- Strings are immutable.
- In order to access the character at an index we use the following syntax.

let name = "Jayesh"
console.log(name[0]) //J
console.log(name[1]) //a
