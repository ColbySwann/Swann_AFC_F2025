// script.js
// Name: Colby Swann
// Lab2 - Simple Interest Calculator

// Step 1: Create a traditional function to calculate simple interest
// set parameters to accept a principal, rate, and time input value
function calculateSimpleInterest(principal, rate, time) {
    // Formula: (Principal × Rate × Time) / 100
    return (principal * rate * time) / 100;
}

// Step 2: Prompt the user to enter the principal amount
// Create a principal constant and assign value to the input from a user response from a prompt cast to a number
const principal = Number(prompt("Enter the principal amount:"));

// Step 3: Create a rate constant and assign value to the input from a user response from a prompt cast to a number
const rate = Number(prompt("Enter the rate of interest:"));

// Step 4: Create a time constant and assign value to the input from a user response from a prompt cast to a number
const time = Number(prompt("Enter the time in years:"));

// Step 5: Creates an interest constant that calls the calculateSimpleInterest function and passes the save values from the user
const interest = calculateSimpleInterest(principal, rate, time);

// Step 6: Concatenates a String with the value of interest that starts the function
console.log("Your simple interest is:", interest);