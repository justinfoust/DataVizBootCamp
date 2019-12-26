// grab references to the input element and the output div
// @TODO: YOUR CODE HERE
var inputField = d3.select("#text");
var output = d3.select(".output");


// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  // @TODO: YOUR CODE HERE
  var inputText = d3.event.target.value;
  console.log(inputText);

  var reversed = reverseString(inputText);

  output.text(reversed);
  // clear the existing output
  // @TODO: YOUR CODE HERE

  // reverse the input string
  // @TODO: YOUR CODE HERE

  // Set the output text to the reversed input string
  // @TODO: YOUR CODE HERE
}

// Attach an event to detect changes to the input field.
// @TODO: YOUR CODE HERE

button.on("click", handleChange);