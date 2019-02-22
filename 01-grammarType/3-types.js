/* 
Booleans
******************
What is a boolean? Boolean can represent: true/false, yes/no, on/off


var y = false;
(1)
1-Keyword for boolean - no quotation marks
*/ 
var x = true;

let on = true;
console.log(on);

/* 
Null
******************
Null = empty value (not 0; not undefined)
It is like an empty container; nothing is in it, but it still exists as a space to fill
*/
let empty = null;
console.log(empty);

/*
Undefined
******************
Undefined = no value assigned (not even an empty container)

UNDEFINED IS NOT AN ERROR
*/

let value = undefined;
console.log(value);

let grass;
console.log(grass);
// This will show you undefined because we haven't defined what grass is.

/* 
Numbers
**********
Numbers are exactly what they sounds like, numbers. In JS, you dont need anything special to write them. 
*/

age = 27;
var myAge = age;
console.log(age);

var myAge = 27;
console.log(myAge);
// Both of these are ways to make variable mean 27

/*
Strings
*********
Strings are Datatypes used to represent text and are wrapped in either a single or double quote
Strings are Primative Datatype. This also includes Numbers, Booleans, Null, Undefined and others 
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne + ', ' + stringTwo);// String concatenation (How to add a comma between words)

//From Slack
// let stringOne = "double quotes";
// let stringTwo = 'single quotes';
// console.log(stringOne ,  stringTwo);// String concatenation
// let combined = stringOne + ", " + stringTwo;
// console.log(stringOne, ",", stringTwo);

// Numbers vs. Strings
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);
