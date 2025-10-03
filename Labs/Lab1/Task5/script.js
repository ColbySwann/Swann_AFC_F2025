// script.js
// Name: Colby Swann
// Task5 - Temperature Classifier

// Step 1: Create a traditional function named classifyTemperature and set the parameter as a string value called Celsius
function classifyTemperature(celsius) {
    // Step 2: Convert Celsius into Fahrenheit as a number
    const fahrenheit = (celsius * (9 / 5)) + 32;

    // Step 3: Define blocks of temperature in Fahrenheit using conditionals
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

// Step 5: Convert input into a number and assign it to the celsius constant
const celsius = Number(input);

// Step 6: Validate the input (must be a number); Print error if NaN
if (Number.isNaN(celsius)) {
    console.log("ErrorPage: Please enter a valid number.");
} else {
    // Step 7: Call the function to classify the temperature
    const classification = classifyTemperature(celsius);

    // Step 8: Log the result to the console
    console.log("The temperature is:", classification);
}