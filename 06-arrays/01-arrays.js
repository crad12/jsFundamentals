/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas
*/

let list = ['orange', true, 28];
console.log(list[2]);


let students = ['tony', 'marshal', 'rhys', 'ray', 23, true, ['ryan', 'peter', 'Amira']];

console.log(typeof students);
console.log(students instanceof Array);
console.log(students[6]);
console.log(students[6][1]);

//Challenge, go into the nested array and get 'Amira'. Print out 'Hello Amira, you look nice today!' 

let students = ['tony', 'marshal', 'rhys', 'ray', 23, true, ['ryan', 'peter', 'Amira']];

let name = students[6][2];

console.log(`Hello ${name}, you look nice today!`);

//console.log(students[6][2]);
//console.log(`Hello ${students[6][2]}, you look nice today!`);