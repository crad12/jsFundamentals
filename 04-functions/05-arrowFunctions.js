// nickname: FAT ARROW FUNCTIONS

function coffee() {
    console.log("Coffee is life!");
}

coffee();

let coffee = () => {                   // Not >= (Needs to be arrow shaped)//
    console.log("Coffee is cool");
}

coffee();

// Both of the above functons do the same thing "function" vs "=>" //

let cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`);
}

cats(1, 35);

//****************************************** */

let  fatArrows = (x) => {console.log(x);}          // One way to write function // {block body}

fatArrows("This is a function, nothing to see");


let fatArrows = (x) => console.log(x);           // Quicker way to write function // no curlies = Concise line

fatArrows("This is a function, nothing to see");

// Challenge: Create two functions
// first - take a string parameter, and the captilize it;
// first - return the string;
// second - string as a parameter, and then lowercase;
// console.log result
// Take the return from the first, and then pass it into the second function.

let score = "Winner" 

function upperCase(big) {
    return big.toUpperCase();
}

function lowerCase(small) {
    return small.toLowerCase();
}

console.log(upperCase(score));
console.log(lowerCase(score));

console.log(lowerCase(upperCase(score)));