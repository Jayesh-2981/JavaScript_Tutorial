//! While Loop
let n = 5;
let i = 0;
while (i <= n) {
  console.log(i);
  i++;
}
/* 
! Output:
! 0
! 1
! 2
! 3
! 4
! 5
* Explanation: 
* The while loop runs while `i` is less than or equal to `n`, printing the value of `i` from 0 to 5. 
*/

//! Do while loop
i = 0; // reinitializing the value of i
do {
  console.log(i);
  i++;
} while (i <= n);
/* 
! Output:
! 0
! 1
! 2
! 3
! 4
! 5
* Explanation: 
* The do-while loop ensures that the code block is executed at least once, printing the values of `i` from 0 to 5.
*/
