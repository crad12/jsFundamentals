/**************************
HOISTING

1-grammarAndTypes
  04-hoisting.js
**************************/

console.log(scissors); // undefined (example 1)

scissors = 'blue';

console.log(scissors);
var scissors;

scissors = "blue"; // blue (example 2) 

console.log(scissors);
var scissors;

/*
Hoisting does not exist--it is an illusion

JS actually reads through your code twice, the first, it simply reads through, looking for the LEFT HAND SIDE of variables and functions; the declarations.
Then, the second pass through, it reads through the RIGHT HAND SIDE, assigning values and expressions.
JS DOES grab things like functions */

b();
console.log(a)

function b(){
  console.log('This is all hoisted!')
}
var a = 'This is not hoisted'