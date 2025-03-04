**Chapter 9 - Callbacks, promises & async/await**

- Asynchronous actions are the actions that we initiate now and they finish later. eg. setTimeout
- Synchronous actions are the actions that initiate and finish one-by-one

**_Callback functions_**

- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete an action.

- Here is an example of a callback :

  function loadScript(src, callback) {
  let script = document.createElement('script')
  document.head.append(script)
  }

- Now we can do something like this :

  loadScript('https://www.google.com',(script)=>{
  alert('script is loaded')
  alert(script.scr)
  });

- This is called "callback-based" style of async programming.
- A function that does something asynchronously should provide a callback argument where we put the function to run after its complete.

**_Handling Errors_**

- We can handle callback errors by supplying error argument like this :

  function loadScript(src, callback){
  ...
  ...
  script.onload=()=> callback(null, script);
  script.onerror=()=> callback(new Error('failed'));
  }

- Then inside of loadScript call:

  loadScript('googlii.com', function(error, script){
  ...
  if(error){
  // handle error
  }
  else {
  script loaded
  }
  });

**_Pyramid of Doom_**

- When we have callback inside callbacks, the code gets difficult to manage.
  loadScript((...){
  loadScript...
  loadScript...
  loadScript...
  })

- As calls become more nested, the code becomes deeper and increasingly more difficult to manage, especially if we have real code instead of...
- This is sometimes called "callback hell" or "Pyramid of doom".
- The "pyramid" of these calls grows towards the right with every asynchronous action.
- Soon it spirals out of control. So this way of coding isn't good!

**_Introduction to Promises_**

- The solution to the callback hell is promises.
- A promise is a "promise of code execution".
- The code either executes or fails, in both the cases the subscriber will be notified.

- The syntax of a promise looks like this:
  let promise = new Promise(function(resolve, reject)
  {
  // executor
  });
- (resolve, reject) => predefined in js engine.
- resolve(value) => If the job is finished successfullly
- reject(error) => If the job fails

- The promise object returned by the new Promise constructor has these properties

1. state : Initially pending, then changes to either "fulfilled" when resolve is called or "rejected" when reject is called

2. result : Initially undefined, then changes to value if resolved(resolve(value)) or error when rejected(reject(error))

**_Consumers : then & catch_**

- The consuming code can receive the final result of a promise through then & catch.

- The most fundamental one is then
  promise.then(function(result){
  /_ handle_/
  }, function(error){
  /_ handle error_/
  });

- If we are interested only in successful completions, we can provide only one function argument to then():
  let promise = new Promise((resolve) => {
  setTimeout((c) => resolve("done"), 1000);
  });
  promise.then(alert);

- If we are interested only in errors, we can use null as the first argument: .then(null,f) or we can use catch:
  promise.catch(alert);

- promise.finally((c)={}) is used to perform general cleanups.

**_Promises Chaining_**

- We can chain promises and make them pass the resolved values to one another like this.
  promise.then(function(result)=>{
  alert(result);
  return 2;
  }).then -------

- The idea is to pass the result through the chain of .then handlers.

- Here is the flow of execution.

1. The initial promise resolves in 1 seconds (Assumption)

2. The next .then() handler is then called, which returns a new promise(resolved with 2 value)

3. The next .then() gets the result of previous one and this keeps on going

- Every call to .then() returns a new promise whose value is passed to the next one and so on.
- We can even create custome promises inside .then()

**_Attaching multiple handlers_**

- We can attach multiple handlers to one promise.
- They dont pass the result to each other; instead they process it independently.

  let p is a promise
  p.then(handler1)
  p.then(handler2)
  p.then(handler3)

- Above three promises runs independently

**_Promise API_**

- There are 6 static methods of Promise class:

1. Promise.all(promises) => waits for all promises to resolve and returns the array of their results. If any one fails, it becomes the error & all other results are ignored.

2. Promises.allSettled(promises) => waits for all the promises to settle and returns their results as an array of objects with status and value.

3. Promise.race(promises) => waits for the first promise to settle and its result/error becomes the outcome.

4. Promise.any(promises) => waits for the first promise to fulfill(& not rejected), and its result becomes the outcome. Throws AggregateError if all the promises are rejected.

5. Promise.resolve(value) => Makes a resolved promise with the given value.

6. Promise.reject(error) => Makes a rejected promise with the given error.
