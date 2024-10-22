//Array Methods

let num = [1, 2, 3, 4, 5];

// 1) toString() =>
let b = num.toString(); //b is now a string
console.log(typeof b); //string
console.log(b); //1,2,3,4,5

console.log("**************************************");

// 2) join() =>
let c = num.join("_");
console.log(c, typeof c); //1_2_3_4_5 string

console.log("**************************************");

// 3) pop() =>
let r = num.pop(); //pop returns the popped elements
console.log(num, r); //[ 1, 2, 3, 4 ] 5

console.log("**************************************");

num[4] = 5;
// 4) push() =>
let s = num.push(56); //push returns the new array length
console.log(num, s); //[ 1, 2, 3, 4, 5, 56 ] 6

console.log("**************************************");

// 5) shift() =>
let t = num.shift(); //removes an element from the start of the array
console.log(t, num); //1 [ 2, 3, 4, 5, 56 ]

console.log("**************************************");

// 6) unshift() =>
let u = num.unshift(78); //returns new array length
console.log(u, num); //6 [ 78, 2, 3, 4, 5, 56 ]

console.log("**************************************");

// 7) delete() =>
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num1); // [1,2,3,4,5,6,7,8,9]
console.log(num1.length); //9
delete num1[0];
console.log(num1); //[ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(num1.length); //9

console.log("**************************************");

// 8) concat() =>
let num2 = [10, 11, 12, 13, 14, 15];
let num3 = [3, 4, 4, 6, 5];
let newArray = num1.concat(num2);
console.log(newArray); //[ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
let newArray2 = num1.concat(num2, num3);
console.log(newArray2); //[ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 3, 4, 4, 6, 5 ]

console.log("**************************************");

// 9) sort() =>
let arr = [4, 3, 5, 33, 5, 1, 2];
arr.sort();
console.log(arr); //[ 1, 2, 3, 33, 4, 5, 5 ]

let compare = (m, n) => {
  return m - n; //for ascending
  // return n - m //for descending
};
let arr2 = [3, 34, 25, 67, 45, 4, 632, 6];
arr2.sort(compare);
console.log(arr2);

console.log("**************************************");

// 10) reverse() =>
num1.reverse();
console.log(num1); //[ 9, 8, 7, 6, 5, 4, 3, 2, <1 empty item> ]

console.log("**************************************");

// 11) splice() =>
let num4 = [1, 2, 3, 4, 5, 6, 7, 8];
num4.splice(2, 3, 10, 11, 12, 13, 14);
console.log(num4); // [ 1, 2, 10, 11, 12, 13, 14, 6, 7, 8]

console.log("**************************************");

// 12) slice() =>
let num5 = [1, 2, 3, 4, 5, 6, 7, 8];
let newNum = num5.slice(3);
console.log(newNum); //[ 4, 5, 6, 7, 8 ]

let newNum2 = num5.slice(3, 6);
console.log(newNum2); //[ 4, 5, 6 ]
