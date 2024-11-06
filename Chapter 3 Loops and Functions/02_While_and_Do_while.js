//! While Loop
let n = 15;
let i = 0;
while (i <= n) {
  console.log(i);
  i++;
}
/* 
Output:
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
Explanation: The while loop runs while `i` is less than or equal to `n`, printing the value of `i` from 0 to 15. 
*/

//! Do while loop
i = 0; // reinitializing the value of i
do {
  console.log(i);
  i++;
} while (i <= n);
/* 
Output:
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
Explanation: The do-while loop ensures that the code block is executed at least once, printing the values of `i` from 0 to 15.
*/
