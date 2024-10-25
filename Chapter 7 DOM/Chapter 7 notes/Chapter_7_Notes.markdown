**Chapter 7 - Walking the DOM**

- DOM tree refers to the HTML page where all the notes are objects.
- There can be 3 main types of nodes in the DOM tree :

1. text nodes
2. element nodes
3. comment nodes

- In a HTML page, <html> is at the root and <head> and <body> are its children, etc.

- A text node is always a leaf of the tree.

**_Auto Correction_**

- If an erroneoud HTML is encountered by the browser, it tends to correct it.
- for example, if we put something after the body, it is automatically moved inside the body.
- Another example is <table> tag which must contain <tbody>

**_Walking the DOM_**

<html>
<head>
<title> Hello </title>
</head>
<body>
...
</body>
</html>

- document.body => page body tag
- document.head => page head tag
- document.documentElement => page HTML tag

- **_Note_**
- Document body can sometimes be null if the javascript is written before the body tag.

**_Children of an Element_**

- Direct as well as deeply nested elements of an element are called its children.
- Child nodes => Elements that are direct children. for example, head and body are children of <html>
- Descendant nodes => All nested elements, childrens, there childrens and so on...

**_firstChild, lastChild, childNodes_**

- element.firstChild => first child element
- element.lastChild => last child element
- element.childNodes => All child nodes

- Following is always true:
- elem.childNodes[0] === elem.firstChild
- elem.childNodes[elem.childNodes.length -1 ] === elem.lastChild

- There is also a method elem.hasChildNodes() to check whether there are any child nodes.

**_Note_**

- childNodes looks like an array.
- But its not actually an array but a collection.
- We can use Array from (Collection) to convert it into an array. _Array methods will not work_

**_Notes on DOM Collections_**

- They are read-only
- They are live, elem.childNodes variable(reference) will automatically update if childNodes of elem is changed.
- They are iterable using for...of loop.

**_Siblings and the Parent_**

- Siblings are nodes that are childrens of the same parent

- Example: <head> and <body> are siblings
- Siblings have same parent.
- In the above example its html

- <body> is said to be the "next" or "right" sibling of <head>, <head> is said to be the "previous" are "left" sibling of <body>

- The next sibling is in nextSibling property, and the previous one in previous sibling.
- The parent is available as parentNode.

- alert(document.documentElement.parentNode); //document
- alert(document.documentElement.parentElement); //null

**_Element Only Navigation_**

- Sometimes, we dont want text or comment nodes.
- Some links only take Element notes into account.

- For Example :
- document.previousElementSibling => Previous sibling which is an element
- document.nextElementSibling => Next Sibling (Element)
- document.firstElementChild => First Element Child
- document.lastElementChild => Last Element Child

**_Table Links_**

- Certain DOM elements may provide additional properties specific to there type for convenience.

- Table element supports the following properties:
- table.rows => Collection of tr elements
- table.caption => reference to <caption>
- table.tHead => regerence to <thead>
- table.tFoot => reference to <tfoot>
- table.tBodies => Collection of <tbody> elements
- tbody.rows => Collection of <tr> inside
- tr.cells => Collection of td and th
- tr.sectionRowIndex => Index of tr inside enclosing element
- tr.rowIndex => Row number starting from 0
- td.cellIndex => number of cells inside enclosing <tr>

**_Searching the DOM_**

- DOM navigation properties are helpful when the elements are close to each other.
- If they are not close to each other, we have some more methods to search the DOM

1. document.getElementById

- This method is used to get the element with a given "id" attribute.
  let span = document.getElementById('span')
  span.style.color = "red"

2. document.querySelectorAll

- Returns all elements inside an element matching the given CSS selector.

3. document.querySelector

- Returns the first element for the given CSS Selector.
- A efficient version of elem.querySelectorAll(CSS)[0]

4. document.getElementsByTagName

- Returns elements with the given tag name.

5. document.getElementsByClassName

- Returns elements that have the given CSS class.

6. document.getElementsByName

- Searches elements by the name attribute.

**_Matches, Closest and Contains methods_**

- There are three important methods to search the DOM

1. elem.matches(css) => To check if elements matches the given CSS selector.
2. elem.closest(css) => To look for the nearest ancestor that mathces the given CSS selector. The element itself is also checked.
3. elemA.Contains(elemB) => Returns true if elemB is inside elemA (a descendant of elemA) or when elemA==elemB.
