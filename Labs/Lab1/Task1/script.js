// script.js
// Name: Colby Swann
// Lab1 - Dynamic Age Calculator

// Step 1: Create a function to calculate an age from a year input
function calculateAge(year) {
    // Step 2: Determine the current year based on the system time
    const currentYear = new Date().getFullYear();

    // Step 3: Subtract the year input from the current year
    return currentYear - year;
}

// Step 4: Ask the user to enter the year they were born
const input = prompt("Enter your birth year (e.g., 2004):");

// Step 5: Convert the string input into a number
const birthYear = Number(input);

// Step 6: Ensure the input is valid
if (input === null || Number.isNaN(birthYear)) {
    // Step 7: If there is no value or a value that is not a number pass an error message
    console.log("No valid year provided.");
} else {
    // Step 8: If input is valid, call the function to calculate age
    const age = calculateAge(birthYear);

    // Step 9: Display the result in the console
    console.log("Your age is:", age);
}