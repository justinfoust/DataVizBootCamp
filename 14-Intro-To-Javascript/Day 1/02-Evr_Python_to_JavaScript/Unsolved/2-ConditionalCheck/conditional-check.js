var x = 1;
var y = 10;

// Checks if one value is equal to another
if (x === y)
{
    console.log("x is equal to y");
}
// Checks if one value is NOT equal to another
if (y !== x)
{
    console.log('y is not equal to x');
}
// Checks if one value is less than another
if (x < y)
{
    console.log('x is less than y');
}
// Checks if one value is greater than another
if (x > y)
{
    console.log('x is greater than y');
}
// Checks if a value is less than or equal to another
if (x >= y)
{
    console.log('x is greater than or equal to y');
}
// Checks for two conditions to be met using &&
if (x ===1 && y === 10)
{
    console.log('both values returned true');
}
// Checks if either of two conditions is met using ||
if (x < 45 || y < 5)
{
    console.log('either x is less than 45 or y is less than 5 or both');
}
// Nested if statements
if (x < 10)
{
    if (y < 50)
    {
        console.log("x is less than 10 and y is less than 50");
    }
    else if (y > 50)
    {
        console.log('x is less than 10 and y is greater than 50');
    }
    else
    {
        console.log('x is less than 10 and y is equal to 50');
    }
}