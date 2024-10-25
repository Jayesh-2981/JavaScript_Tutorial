let arr = [12, 123, 34, 5, 34];
// console.log(arr);    //[ 12, 123, 34, 5, 34 ]

//! Array map method
let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + index;
});
console.log(a);

/* Output
12 0 [ 12, 123, 34, 5, 34 ]
123 1 [ 12, 123, 34, 5, 34 ]
34 2 [ 12, 123, 34, 5, 34 ]
5 3 [ 12, 123, 34, 5, 34 ]
34 4 [ 12, 123, 34, 5, 34 ]
[ 12, 124, 36, 8, 38 ]
*/

//! Array filter method
let arr2 = [12, 3, 4, 56, 56, 346, 4];
let a2 = arr2.filter((a) => {
  return a < 10;
});
console.log(a2); //[ 3, 4, 4 ]

//! Array Reduce method
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
// let newArray = arr3.reduce((h1, h2) => {
//     return h1 + h2
// })

//OR

const reduce_func = (h1, h2) => {
  return h1 + h2;
};
let newArray = arr3.reduce(reduce_func);

console.log(newArray); //36
