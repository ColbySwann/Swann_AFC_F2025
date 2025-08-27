// script.js
// Name: Colby Swann
// Task3 - Favorite Color Selector

// Step 1: Create an base array with the primary colors
let colors = ["red", "blue", "green"];

// Step 2: Create a traditional function named addColor
function addColor(colorArray) {
    // Step 3: Prompt the user to add a color to the list
    const newColor = prompt("Enter a color to add:");

    // Step 4: Add the new color to the beginning of the array
    colorArray.unshift(newColor);

    // Step 5: Log the updated array
    console.log("Updated colors:", colorArray);
}

// Step 6: Call the function with the colors array
addColor(colors);