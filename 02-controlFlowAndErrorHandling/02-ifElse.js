// If Else Statements

let money = false

if (money) {                  //This line is if statement//
    console.log('Starbucks')
} else {                      //This is the If Else statement//
    console.log('Make Coffee')
}

let weather = 75

if (weather < 70) {
    console.log('Wear a jacket')
} else {
    console.log('No jacket neccessary')
}

let myName = 'Chad'     

if (myName) {                                    //if (myName === 'Chad') {
    console.log('Hello, my name is', myName)
    console.log(`Hello, my name is ${myName}.`) // String Interpolation //
} else {
    console.log('Hello, my name is Chad')
}


let myName = 'chAd'
let myNameChanged = myName.charAt(2).toLowerCase();
let myNameChangedTo = myName.charAt(0).toUpperCase();

console.log()


// Else If Statements

let weather = 60

if (weather > 70) {
    console.log('Wear a t-shirt')
} else if (weather <= 70 && weather > 50) {
    console.log('Wear a light jacket')
} else {
    console.log('Stay Inside')
}

// You can add varibales for everything for when you run console.log //

// Example: let rent = Yay! You can rent a car!
//          let drink = Yay! You can drink!
            

let age = 15

if (age >= 25) {
    console.log('Yay, you can rent a car!')
} else if (age <= 25 && age > 21) {
    console.log('Yay! You can drink!') 
} else if (age <= 21 && age > 18) {
    console.log('Yay! You can vote!')
} else {
    console.log('Sorry, you\'re too young to do anything!')
}

 // ANother way to type the above //

 let age = 26
 
 if (age >= 25) {
    console.log('Rent, Drink, and Vote!')
} else if (age >= 21) {
    console.log('Drink, and Vote!') 
} else if (age >= 18) {
    console.log('Vote only!')
} else {
    console.log('Sorry, you\'re too young to do anything!')
}
