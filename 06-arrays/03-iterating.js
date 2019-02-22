let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];

food.forEach(f => {console.log(f); })      //This is using a For Each function//


/*
// Challenge (Go look at MDN docs to remind you): **************************************//
// Create a list (with an array) of movies
// Use .forEach() to list your movies
// Add another movie at the end 
// And replace one of your existing movies with another one 
// */

let movies = ['titanic', 'top gun', 'jurassic park'];

movies.push('superman');

movies.splice(1,1, "batman");
movies.forEach(m => {console.log(m); })


//*********************************************************************************** */