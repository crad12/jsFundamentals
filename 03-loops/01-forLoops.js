// // For Loops

for (var i = 0; i < 10; i++) {
    console.log(i)
}

// // Challenege, using a For Loop, count to 20,by 2's
// for (var i = 0; i < 21; i+=2) {
//     console.log(i)
// }

// // Challenge, using a For Loop, count from 10 to 0, going down by 1's
// for (var i = 10; i > -1; i--) { 
//     console.log(i)
// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// // Challenge, using a for loop, count from 0, going down by 2's to -24
// for (let i = 0; i >= -24; i-=2) {      // Can also use (> -26 instead of >=)
//     console.log(i)
// }

// // Challenge, using a for loop, go through a name and display each letter individually
// let str = "Chad";
 
// for (var i = 0; i <= ["C", "h", "a", "d"]; i++); {       // My way, not working //
//     console.log(str[i])
// }

// let str = "name";                             // Correct way //

// for (var i = 0; i < str.length; i++) {
//     console.log(str[i])
// }
    

// // Challenge, Make a for loop where you add up all of the numbers from 1 to 50 (should equal 1275)
// for (let i = 50; i > 50 % (1275); i++) {      // This is my method, doesn't work!! //
//     console.log(50)
// }

// var sum = 0;                         // This is the correct way to do this challenge //

// for (var i = 1; i <= 50; i++) {
//     sum += i
// }

// console.log(sum);


// // From Instructor // *****************************************************************************

// // FOR LOOPS

// for (var i = 0; i < 10; i--) {
//     console.log(i)
// }

// //Challenge: using a for loop, count to 20, by 2's

// for (let i = 3; i > 0; i++) {
//     console.log(i)
// }

// //Challenge: using a for loop, count from 10 to 0, going down by 1's

// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// //Challenge: using a for loop, count from 0, going down by 2's to -24

// for (var i = 0; i > -25; i -= 2) {
//     console.log(i)
// }

// // Challenge: using a for loop, go through a name and display each letter individually

// let word1 = "milk";
// let word2 = word1.split('')
// let wordL = word1.length

// for (let x = 0; x < wordL; x += 1) {
//     console.log(word2[x])
// }

// var str = "name";

// for (var i = 0; i < str.length; i++) {
//     console.log(str.charAt(i))
// }

// let str = "name";

// for (var i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

// /*
// Challenge: 
// Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
// */

// var sum = 0;

// for (var i = 1; i <= 50; i++) {
//     sum += i
//     console.log(sum);
// }





for (Let(x) = 0; x <= 100; x++); {
    if (x % 15 == 0);
        console.log("Fizz Buzz"); 
    else if (x % 5 == 0); 
        console.log("Buzz"); 
    else (x % 3 == 0); 
        console.log("Fizz");
} 

console.log(x);
