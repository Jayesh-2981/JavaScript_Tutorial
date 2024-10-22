let num = [1, 4, 3, 5, 46, 7, 5, 5];

/*for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}*/

/* output:
1
4
3
5
46
7
5
5 */

//forEach loop
num.forEach((element) => {
  console.log(element);
});

/* output:
1
4
3
5
46
7
5
5 */

// Array.from
let name = "Jayesh";
let arr = Array.from(name);
console.log(arr); //[ 'J', 'a', 'y', 'e', 's', 'h' ]

// for...of
for (let i of num) {
  console.log(i);
}

/* output:
1
4
3
5
46
7
5
5 */

// for...in
for (let item in num) {
  // console.log(item) => it will give keys from 0 to num.length
  console.log(num[item]);
}

/* output:
1
4
3
5
46
7
5
5 */
