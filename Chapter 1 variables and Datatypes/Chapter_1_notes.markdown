**Chapter 1 - Variables and Data**
Just like we follow some rules while speaking english (The grammer), we have some rules to follow while writing a javascript program. The set of these rules is called syntax in javascript.

**_What is a variable ?_**

- A variable is a container that stores a value.
- The value of a javascript variable can be changed during the execution of a program.
  var a = 7;
  let b = 7;
  const c = 7;

**_Rules of Choosing variable names_**

- Letters, digits, underscores and $ sign allowed.
- Must begin with a $, `_` or a letter.
- Javascript reserverd words cannot be used as a variable name.
- Jayesh and jaYEsh are different variables (Case Sensitive).

**_Var vs let vs const in javascript_**

1. var is globally scoped while let and const are block scoped
2. Var can be updated & redeclared within its scope
3. let can be updated but not redeclared
4. Const can neither be updated nor be re-declared
5. Var variables are intialized with undefined whereas let and const variables are not initialized.
6. Const must be intialized during declaration unlike let and var.

**_Primitive Data types and objects_**

- Primitive data types are a set of basic datatypes in javascript.
- Object is a non primitive datatype in javascript.
- There are seven primitive datatypes in javascript
  null, number, string, symbol, undefined, boolean, BitInt

**_Object_**
An object in javascript can be created as follows.
const item = {
name : "LED Bulb",\
 price : "150"
}
