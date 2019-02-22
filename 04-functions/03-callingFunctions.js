// Calling Functions //

function hi(){
    console.log("Hi");
    return "Hey";
}

hi;
hi();
console.log(hi);
console.log(hi());

//Challenge, Create a function that, when invoked, lists out the numbers from 1 to 10

function list() {
    console.log("1, 2, 3, 4, 5, 6, 7, 8, 9, 10");
    // return ""
}

list();
console.log(list);



function list() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    return "Done!";
}

list();
console.log(list());


// Challenge, given the array, create a function that lists our the values individually
let arr = ['This', 'is', 'really', 'cool?'];         // This is the variable (let) //
function list() {                                    // This is a function //
    for (item of arr) {                              // This is a "For Of" statement //
        console.log(item);
    }
}

list();

