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
