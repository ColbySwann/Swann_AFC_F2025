// script.js
// Name: Colby Swann
// Task3 - Favorite Color Selector

// Step 1: Creates a variable named color and assigns the value of an array with 3 base inputs
let colors = ["red", "blue", "green"];

// Step 2: Creates a function to accept an array called colorArray
function addColor(colorArray) {
    // Step 3: Assigns the value of the input from the user to the newColor constant
    const newColor = prompt("Enter a color to add:");

    // Step 4:
    colorArray.unshift(newColor);

    // Step 5: Log the updated array
    console.log("Updated colors:", colorArray);
}

// Step 6: Call the function with the colors array
addColor(colors);