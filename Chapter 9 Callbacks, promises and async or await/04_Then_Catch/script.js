//! Then and Catch

// Create the first Promise (p1)
let p1 = new Promise((resolve, reject) => {
  // Log that the promise is pending
  console.log("Promise is pending");

  // Simulate an asynchronous operation with setTimeout (5 seconds delay)
  setTimeout(() => {
    // Log that the promise has been resolved after 5 seconds
    console.log("I am a promise and I am resolved");

    // Resolve the promise with the value 'true'
    resolve(true);

    // Uncomment this line if you want to test rejection in p1 (to simulate failure)
    // reject(new Error("Hii, p1 encountered an error"));
  }, 5000);
});

// Create the second Promise (p2)
let p2 = new Promise((resolve, reject) => {
  // Log that the promise is pending
  console.log("Promise is pending");

  // Simulate an asynchronous operation with setTimeout (5 seconds delay)
  setTimeout(() => {
    // Log that the promise has been rejected after 5 seconds
    console.log("I am a promise and I am rejected");

    // Reject the promise with an error message
    reject(new Error("Hii I am an error"));
  }, 5000);
});

// Handle the fulfillment and rejection for the first promise (p1)
p1.then(
  (value) => {
    // Log the value passed when the promise is resolved (true)
    console.log("Promise 1 fulfilled with value: " + value);
  },
  (error) => {
    // Log the error message when the promise is rejected
    console.log("Promise 1 rejected with error: " + error.message);
  }
);

// Handle both fulfillment and rejection for the second promise (p2)
p2.then(
  (value) => {
    // Log the value passed when the promise is resolved (this will not run in this case)
    console.log("Promise 2 fulfilled with value: " + value);
  },
  (error) => {
    // Log the error message when the promise is rejected
    console.log("Promise 2 rejected with error: " + error.message);
  }
);
