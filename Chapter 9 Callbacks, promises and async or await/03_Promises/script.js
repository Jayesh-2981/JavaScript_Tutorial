//! Example of promise

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate a successful operation

      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000); // Simulate a 2-second delay
  });
}

fetchData()
  .then((message) => {
    console.log(message); // "Data fetched successfully!" after 2 seconds
  })
  .catch((error) => {
    console.error(error); // In case of failure, logs "Failed to fetch data."
  })
  .finally(() => {
    console.log("Fetch operation complete."); // Runs regardless of success or failure
  });

//! Introduction to promise

// Create a new Promise object
let promise = new Promise(function (resolve, reject) {
  // Show an alert immediately when the promise is created
  alert("Hello");

  // Resolve the promise with a value of 56
  resolve(56);
});

// Log "Hello One" to the console immediately
console.log("Hello One");

// Schedule a function to run after 2 seconds, which logs "Hello Two in 2 seconds"
setTimeout(function () {
  console.log("Hello Two in 2 seconds");
}, 2000);

// Log "My name is Hello Three" to the console immediately
console.log("My name is " + "Hello Three");

// Log the Promise object to the console
// At this point, the promise has already resolved with the value 56
console.log(promise);
