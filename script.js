console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Soup", "Pizza", "Pasta", "Tacos", "Bruchetta", "Mac and Cheese"];
 
// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let food of favoriteFoods) {
  console.log(`One of my favorite foods is ${food}.`);
}

// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is “Pasta" (copy/paste for all items)
// "My #2 favorite food is "Pizza”
// ...etc.
console.log(`My #${i + 1} favorite food is ${favoriteFoods[i]}`);
}

// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
{
  console.log(`Have you ever tried ${foodName}?`);
  console.log(`I always recommend ${foodName} to friends.`);
  console.log(`Trust me — ${foodName} is delicious.`);
}

// 4b. Call the function at least 3 times
printFoodRecommendation("Ramen");
printFoodRecommendation("Pho");
printFoodRecommendation("Sushi");

// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
  "Risotto", "Tiramisu", "Gumbo", "Kebab", "Jambalaya", "Chili", "Gazpacho", "Ratatouille", "Meatloaf", "Fish and Chips", "Dumplings", "Stuffed Peppers", "Couscous", "Pavlova", "Tostones", "Katsu", "Sauerbraten", "Crab Cakes", "Cornbread", "Pierna Asada", "Poke Bowl", "Lobster Roll", "Grits", "Roti", "Baba Ganoush", "Plantains", "Focaccia", "Tteokbokki", "Arequipe", "Spanakopita", "Mochi", "Jollof Rice", "Cassoulet", "Bulgogi", "Matzo Ball Soup", "Cabbage Rolls", "Kofta", "Pierna de Pollo", "Vichyssoise", "Khachapuri", "Doro Wat", "Maultaschen", "Kransekake", "Aloo Gobi", "Rendang", "Tagine", "Chicken Pot Pie", "Crêpe Suzette", "Beignets", "Lamb Chops"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.
for (let food of friendFavorites) {
  if (food.toLowerCase().includes("a")) {
    console.log(food);
  }

// 6. Store the result in an array called foodsWithA. Print out the array.
let foodsWithA = friendFavorites.filter(food => food.toLowerCase().includes("a"));
console.log("Foods with 'a' in the name:", foodsWithA);

// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = friendFavorites.filter(food => food.length > 6);
console.log("Long-named foods:", longFoodNames);

// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = friendFavorites.filter(food => food.length <= 6);
console.log("Short-named foods:", shortFoodNames);

// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
if (longFoodNames.length > shortFoodNames.length) {
  console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
  console.log("There are more short-named foods.");
} else {
  console.log("There are the same number of long and short-named foods.");
}

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
for (let food of friendFavorites) {
  if (food.length > longestFood.length) {
    longestFood = food;
  }
}
console.log(`The longest food name in the list is "${longestFood}" with ${longestFood.length} characters.`)
