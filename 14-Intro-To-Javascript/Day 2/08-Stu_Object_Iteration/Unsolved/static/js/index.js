// Array of recipe objects
var recipes = [
  { dish: "Fried fish", spice: "Dorrigo" },
  { dish: "Crab Rangoon", spice: "Akudjura" },
  { dish: "Pickled Okra", spice: "Chili pepper" },
  { dish: "Macaroni salad", spice: "Pepper" },
  { dish: "Apple butter", spice: "Avens" },
  { dish: "Pepperoni Pizza", spice: "Asafoetida" },
  { dish: "Hog fry", spice: "Peppermint" },
  { dish: "Corn chowder", spice: "Akudjura" },
  { dish: "Home fries", spice: "Celery leaf" },
  { dish: "Hot chicken", spice: "Boldo" }];

console.log(recipes);

// @TODO: YOUR CODE HERE

var dishes = [];
var spices = [];

recipies.forEach(recipie => {dishes += recipie.dish});
recipies.forEach(recipie => {spices += recipie.spice});

console.log(dishes);
console.log(spices);

// var dishes = [];
// var spices = [];

// dishes = recipes.map(recipie => recipie.dish);
// spices = recipes.map(recipie => recipie.spice);

// console.log(dishes);
// console.log(spices);