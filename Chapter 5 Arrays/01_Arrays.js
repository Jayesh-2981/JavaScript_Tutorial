let marks_class_12 = [91, 82, 63, 84, false, "absent"]
console.log(marks_class_12); //[ 91, 82, 63, 84, false, 'absent']
console.log(marks_class_12[0]); //91
console.log(marks_class_12[1]); //82
console.log(marks_class_12[2]); //63
console.log(marks_class_12[3]); //84
console.log(marks_class_12[4]); //false
console.log(marks_class_12[5]); //absent
console.log(marks_class_12[6]); //undefined

marks_class_12[6] = 89 //Adding new value to the array
console.log(marks_class_12[6]); //89

console.log("The length of marks_class_12 is", marks_class_12.length); //The length of marks_class_12 is 7

marks_class_12[0] = 96 //changing the value of an element in aray
console.log(marks_class_12[0]); //96

console.log(typeof marks_class_12); //object