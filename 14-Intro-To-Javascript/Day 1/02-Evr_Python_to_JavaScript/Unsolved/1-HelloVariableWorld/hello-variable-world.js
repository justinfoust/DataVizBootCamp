// Create a variable called "name" that holds a string
var name = "Homer Simpson";
// Create a variable called "country" that holds a string
var country = 'United States';
// Create a variable called "age" that holds an integer
var age = 25;
// Create a variable called "hourlyWage" that holds an integer
var hourly_wage = 15;
// Calculate the "dailyWage" for the user
var weekly_hours = '40';
// Create a variable that holds a number as a string
var weekly_wage = hourly_wage * parseInt(weekly_hours);
// Create a variable called 'weeklyWage' that converts a string into an integer
var satisfied = true;
// Create a variable called "satisfied" that holds a boolean

// Print out "Hello <name>!"
console.log(`Hello, ${name}`);
// Print out what country the user entered
console.log(`You live in ${country}`);
// Print out the user's age
console.log(`You are ${age}`);
// Print out the daily wage that was calculated
console.log(`You make ${weekly_wage} dollars per week`);
// Print out the weekly wage that was calculated

// Using an IF statement to print out whether the users were satisfied
if (satisfied === true) 
{
    console.log("You are satisfied with your pay")
} 
else 
{
    console.log("You are not satisfied with your pay")
}