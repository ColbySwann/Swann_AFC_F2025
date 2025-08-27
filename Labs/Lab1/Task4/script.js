// script.js
// Name: Colby Swann
// Task4 - Event Countdown with Date Object

// Step 1: Create a function that accepts a date as a parameter and calculates the days until the event
function calculateDaysUntil(eventDate) {
    // Step 2: Assigns the Data object to today constant
    const today = new Date();

    // Step 3: Converts the value passed to the parameter to a date value and assigns to the event constant
    const event = new Date(eventDate);

    // Step 4: Calculates the difference between the event date and the today date value
    const diff = event - today;

    // Step 5: Convert milliseconds into days and rounds the value to the nearest integer
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // Step 6: Return number of days
    return days;
}

// Step 7: Prompt the user for a date in YYYY-MM-DD format and assigns the value to the eventDate variable
let eventDate = prompt("Enter event date (YYYY-MM-DD):");

// Step 8: Validate input to ensure the proper format was passed
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
// Creates a loop to prompt the user to use the correct format and stops once the valid response is given
while (!dateFormat.test(eventDate)) {
    eventDate = prompt("Invalid format. Please enter date as YYYY-MM-DD:");
}

// Step 9: Assigns the function to a constant daysRemaining and passes the eventDate value as the parameter value
const daysRemaining = calculateDaysUntil(eventDate);

// Step 10: Log result to the console
console.log("Days until the event:", daysRemaining);