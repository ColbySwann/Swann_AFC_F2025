// script.js
// Name: Colby Swann
// Lab2 - Simple Interest Calculator

// Step 1: Create a traditional function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    // Formula: (Principal × Rate × Time) / 100
    return (principal * rate * time) / 100;
}

// Step 2: Prompt the user to enter the principal amount
const principal = Number(prompt("Enter the principal amount:"));

// Step 3: Prompt the user to enter the rate
const rate = Number(prompt("Enter the rate of interest:"));

// Step 4: Prompt the user to enter the amount of time
const time = Number(prompt("Enter the time in years:"));

// Step 5: Call the function and store the result
const interest = calculateSimpleInterest(principal, rate, time);

// Step 6: Log the result to the console
console.log("Your simple interest is:", interest);