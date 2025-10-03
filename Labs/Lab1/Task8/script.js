// script.js
// Name: Colby Swann
// Task8 - Shopping List Operations

// Step 1: Hardcode an array for the shopping list
let shoppingList = ["eggs", "butter", "flour"];

// Step 2: Create a fat arrow function named modifyItem and pass in two parameters
const modifyItem = (list, newItem) => {
    // Step 3: Add the new item to the end of the array with the .push method
    list.push(newItem);

    // Step 4: Log the updated array to the console
    console.log("Updated shopping list:", list);
};

// Step 5: Prompt the user to input a new item
const userItem = prompt("Enter a new item to add to the shopping list:");

// Step 6: Validate input by seeing if the user input is false and pass an error
if (!userItem) {
    console.log("ErrorPage: You must enter a valid item.");
} else {
    // Step 7: Call the function a pass the shoppingList and user input as the values
    modifyItem(shoppingList, userItem);
}