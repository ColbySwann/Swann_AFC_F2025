// script.js
// Name: Colby Swann
// Task5 - Temperature Classifier

// Step 1: Create a traditional function named classifyTemperature
function classifyTemperature(celsius) {
    // Step 2: Convert Celsius into Fahrenheit
    const fahrenheit = (celsius * (9 / 5)) + 32;

    // Step 3: Define blocks of temperature using conditionals
    if (fahrenheit > 100) {
        return "Hot";
    } else if (fahrenheit > 80) {
        return "Warm";
    } else if (fahrenheit < 40) {
        return "Cold";
    } else {
        return "Chilly";
    }
}

// Step 4: Prompt the user for a temperature in Celsius
const input = prompt("Enter temperature in Celsius:");

// Step 5: Convert input into a number
const celsius = Number(input);

// Step 6: Validate the input (must be a number); Print error if NaN
if (Number.isNaN(celsius)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 7: Call the function to classify the temperature
    const classification = classifyTemperature(celsius);

    // Step 8: Log the result to the console
    console.log("The temperature is:", classification);
}