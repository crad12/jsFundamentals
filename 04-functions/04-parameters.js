charAt()              // This is a parameter, we can insert into a function // 

Example:

function pet(animal) {
    console.log(`I have a ${animal} for a pet.`);
}

pet("cat");

//*********************************** */

// Challenge, write a function that takes two parameters: One parameter for the first name, last name, come togther in a variable, but inside of the function, console.log the new variable.

function wholeName(fName, lName) {                         // This is how to make a sentance with the name 
    console.log(`My name is ${fName} ${lName}`);
}

wholeName("Chad", "Rader");


function wholeName(fName, lName) {                         // This is how to make just the name //
    console.log(fName, lName);
}

wholeName("Chad", "Rader"); 

//************************************* */