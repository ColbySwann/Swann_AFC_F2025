// script.js
// Name: Colby Swann
// Lab1 - Dynamic Age Calculator

// Step 1: Create a function to calculate an age from a year input
// set a parameter of a year to calculate
function calculateAge(year) {
    // Step 2:
    // the Data() object calls the method .getFullYear() to pull a four digit year using the system time
    const currentYear = new Date().getFullYear();

    // Step 3: Subtract the year input from the current year
    // The currentYear is assigned to the current Date and subtracts the year passed to the function
    return currentYear - year;
}

// Step 4:
// creates a const data type called input to prompt the user to enter their birth year.
const input = prompt("Enter your birth year (e.g., 2004):");

// Step 5: creates a const data type called birthYear to save the input from the user
const birthYear = Number(input);

// Step 6: Compares the input that was passed and ensures that there is value assigned to the input
if (input === null || Number.isNaN(birthYear)) {
    // Step 7: If the value is null or not a number it passes an error to the console
    console.log("No valid year provided.");
} else {
    // Step 8: if the input passed by the user is valid call on the calculateAge function
    const age = calculateAge(birthYear);

    // Step 9: Display the result in the console
    // Concatenate a String and the age result from the function calculateAge
    console.log("Your age is:", age);
}