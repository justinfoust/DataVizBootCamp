// @TODO: Complete the following sections to create a lottery number generator.


// Create an empty array to add the numbers.
var arr = [];

// Create a for loop to generate 5 random numbers between 1 and 59.
for (var i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * 59));
}

//  Check your numbers.
console.log(arr);

//Bonus: Add a 6th number to the array between 1 and 35.
    arr.push(Math.floor(Math.random() * 36))

//  Check your numbers.
console.log(arr);


//  Additional bonus.
// How would you generate the random numbers using python?
//from random import random
//
//arr = [(random() * 60) // 1 for i in range(6)] 