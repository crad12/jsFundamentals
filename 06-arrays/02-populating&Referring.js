let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];

for(f in food){
    //console.log(food[f]);
}

food.push('pizza');

food.splice(1,0, 'Bananas');  //This is how you add something, we added bananas//

//console.log(food);

food.splice(4,1 );    //This how to remove something, removed cheese cake//

//console.log(food);

food.pop();          //This is how we remove the last item/element in an array, using "pop"//

console.log(food);