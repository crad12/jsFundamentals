let long = [1,2,3,4,5,6,7,8,9,10];      // Length counts from actual position, starts at 1 //

console.log(long.length);



let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];


console.log(colors.length);
colors.reverse();
console.log(colors.toString());
console.log('*********New console.log()*******');
//console.log(why.toString());       //With a function why (){} you can check whats inside string//

colors.forEach(f => {console.log(f)});


//Challenge, first check if your working with an array, then flip the values in the array, and display the new arranged array

let long = [1,2,3,4,5,];     

//console.log(long.length);
console.log(long instanceof Array);
long.reverse();
long.forEach(l => {console.log(l) });

//**************************************************** */
