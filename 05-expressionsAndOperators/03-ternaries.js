// Ternaries

let x = 6

if (x > 0) {
    console.log('yes')
} else {
    console.log('no')
}

(x > 0) ? console.log('yes') : console.log('no') 
// The above line 11 is Ternary, it says what lines 5 - 9 says, but shorter //



let age = 26; // This is a "Ternary" of the Age ifElse statement below //

(age >= 25) ? console.log('Rent, Drink, and Vote!') : (age >= 21) ? console.log('Drink, and Vote!') : (age >= 18) ? console.log('Vote only') : console.log('Sorry, you\'re too young to do anything!')




let age = 26;
 
if (age >= 25) {
   console.log('Rent, Drink, and Vote!')
} else if (age >= 21) {
   console.log('Drink, and Vote!') 
} else if (age >= 18) {
   console.log('Vote only!')
} else {
   console.log('Sorry, you\'re too young to do anything!')
}