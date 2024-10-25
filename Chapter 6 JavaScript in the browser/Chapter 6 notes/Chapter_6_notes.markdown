**Chapter 6 - JavaScript in the Browser**

- JavaScript was initially created to make web pages alive. JS can be written right in a web page's HTML to make it interactive.
- The browser has an embedded engine called the JavaScript engine or the JavaScript runtime.
- JavaScript's ability in the browser is very limited to protect the user's safety.
- Eg. a webpage on http://goofle.com cannot access http://google.com and steal information from there.

**_Developer Tools_**

- Every browser has some developer tools which makes a developer's life a lot easier.

- F12 on chrome opens Dev tools

- Elements => All HTML Elements
- Console => All the errors + logs
- Network => All network requests.

- We can also write JavaScript commands in the Console.

**_The Script Tag_**

- The script tag is used to insert JavaScript into an HTML page.
- The Script tag can be used to insert external or internal scripts.

<script>
    alert("Hello")
</script>

**_OR_**

<script src = "./script.js"></script>

- The benefit of a separate javascript file is that the browser will download it and store it its cache.

**_Console Object Methods_**

- The console object has several methods, log being one of them. Some of them are as follows:

- assert() => used to assert a condition
- clear() => clears the console
- log() => outputs a message to the console
- table() => Displays a tabular data (can be used for objects in key value pairs)
- warn() => used for warnings
- error() => used for special information

- By using console.log(console) in browser we can see all the methods of console object.
  Object [console] {
  log: [Function: log],
  warn: [Function: warn],
  error: [Function: error],
  dir: [Function: dir],
  time: [Function: time],
  timeEnd: [Function: timeEnd],
  timeLog: [Function: timeLog],
  trace: [Function: trace],
  assert: [Function: assert],
  clear: [Function: clear],
  count: [Function: count],
  countReset: [Function: countReset],
  group: [Function: group],
  groupEnd: [Function: groupEnd],
  table: [Function: table],
  debug: [Function: debug],
  info: [Function: info],
  dirxml: [Function: dirxml],
  groupCollapsed: [Function: groupCollapsed],  
   Console: [Function: Console],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context],
  createTask: [Function: createTask]
  }

- comprehensive list can be looked up on MDN.

**_Interaction : alert, prompt and confirm_**

- alert => Used to invoke a mini window with a message
  alert("hello")

- prompt => Used to take user input as String
  let input = prompt("Hii", "No")

  - "No" :- optional default value

- confirm => Shows a message and waits for the user to press OK or Cancel. Returns true for Ok and false for cancel.

- Example:-

alert("Enter the value of a!") // popup in startup
let a = prompt("Enter a here", "57") //ask value of a (By default it is 57)
a = Number.parseInt(a) //convert String into number
alert("You entered a of type " + (typeof a)) //Display type of a
let write = confirm("Do you want to write it to the page") // asks permission to write on page
if (write) {
document.write(a) //if yes then print the value of a
} else {
document.write("Please allow me to write") //if no then print this message
}

- The exact location and look is determined by the browser which is a limitation.

**_Window object, BOM and DOM_**

- Window contains following things =>

1. DOM
2. BOM
3. Javascript Core

- Window object represents browser window and provides methods to control it.
- It is a global object.

**_Document Object Model (DOM)_**

- Dom represents the page content as HTML
  document.body => Page body as JS object
  document.body.style.background = "green" => Changes page background to green

**_Browser Object Model (BOM)_**

- The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.
- The functions alert/confirm/prompt are also a part of the BOM.
  location.href = "https://google.com" => Redirect to another URL
