let t = document.body.firstElementChild.firstElementChild;
console.log(t); //table.table
// Logs the first table element within the body. Since we're accessing the first child of the first child of the body, it's the first table in the document.

console.log(t.rows); //HTMLCollection(4) [tr, tr, tr, tr]
// Logs the rows of the table, which are returned as an HTMLCollection (an array-like object). It will show all <tr> elements (rows) inside the table.

console.log(t.caption); //caption
// Logs the <caption> element of the table, if it exists. This element provides a title for the table.

console.log(t.tHead.firstElementChild); //tr
// Logs the first <tr> element inside the <thead> of the table. The <thead> is used to group header content in the table.

console.log(t.tBodies); //HTMLCollection [tbody]
// Logs all <tbody> elements inside the table. It returns an HTMLCollection, even if there is only one <tbody> element.

console.log(t.rows[0].rowIndex); //0
// Logs the index of the first row (rowIndex). It returns 0 because the first row's index is always 0.
