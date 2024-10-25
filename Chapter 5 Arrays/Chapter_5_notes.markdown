**Chapter 5 - Arrays**

- Arrays are variables which can hold more than one value.

const fruits = ["banana", "apple", "grapes"]
const a1 = [7, "Jayesh", false] //can be different types

**_Accessing Values_**
let numbers = [1,2,7,9]
numbers[0] //1
numbers[1] //2

**_Finding the length_**
let numbers = [1,7,9,21]
numbers[0] //1
numbers.length //4

**_Changing the values_**
let numbers = [7,2,40,9]
numbers[2] =8 //"Numbers" now becomes [7,2,8,9]

- Arrays are mutable
- Arrays can be changed
- In JS, arrays are objects.
- The type of operator of arrays returns object.
  const n = [1,7,9]
  type of n //returns "object"
- Arrays can hold many values under a single name.

**_Array Methods_**

- There are some important array methods in JavaScript. Some of them are as follows:

1. toString() => converts an array to a string of comma separated values.
   let n = [1,7,9]
   n.toString() // 1,7,9

2. join() => joins all the array elements using a separator
   let n = [7,9,13]
   n.join("-") // 7-9-13

3. pop() => removes last element from the array
   let n = [1,2,4]
   n.pop()

- updates the original array
- returns the popped value

4. push() => Adds a new element at the end of the array
   let a = [7,1,2,8]
   a.push(9)

- modifies the original array
- returns the new array length

5. shift() =>
   let a = [7,1,2,8]
   a.shift()

- removes the first element and returns it

6. unshift() =>
   let a = [7,1,2,8]
   a.unshift(5)

- Adds element to the begining
- Returns new array length

7. delete => Array elements can be deleted using the delete operator
   let d = [1,2,3,4]
   delete d[1]

- delete is an operator

8. concat() => Used to join arrays to the given array
   let a1 = [1,2,3]
   let a2 = [4,5,6]
   let a3 = [7,8,9]
   a1.concat(a2,a3) // returns [1,2,3,4,5,6,7,8,9]

- returns a new array
- does not change existing arrays

9. Sort() => sort() method is used to sort an array alphabetically.
   let a = [7,9,8]
   a.sort()

- a changes to [7,8,9]
- modifies the original array
- Sort() takes an optional compare function.
- If this function is provided as the first argument, the sort() function will consider these values as the basis of sorting.

10. Splice() => splice can be used to add new items to an array
    const numbers = [1,2,3,4,5]
    numbers.splice(2,1,23,24)

- returns deleted items and modifies the array
- 2 => position to add
- 1 => No of elements to remove
- 23,23 => elements to be added

11. Slice()

- slice out a piece from an array
- It creates a new array
  const num = [1,2,3,4]
  num.slice(2) //[3,4]
  num.slice(1,3) //[2,3]

12. reverse()

- reverses the elements in the source array

**_Loops in Arrays_**

- Arrays can be looped through using the classical JavaScript for loops or through some other methods below.

1. forEach loop

- Calls a function, once for each array element
  const a = [1,2,3]
  a.forEach((Value, index, array) => {
  //function logic
  });

2. map()

- Creates a new array be performing some operations on each array element.
  const a = [1,2,3]
  a.map((value, index, array) => {
  return value\*value;
  });

3. filter()

- Filters an array with values that passes a test
- Creates a new array
  const a = [1,2,3,4,5]
  a.filter(greater_than_5);

4. reduce method

- Reduces an array to a single value
  const n = [1,2,3,4,5]
  let sum = numbers.reduce(add)
- sum => 1+2+3+4+5
- add => A function

5. Array.from

- used to create an array from any other object
  Array.from("Jayesh")

6. for...of

- for of loop can be used to get the values from an array

7. for...in

- for in loop can be used to get the keys from an array
