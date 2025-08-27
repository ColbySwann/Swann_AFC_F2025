// script.js
// Name: Colby Swann
// Task9 - Weekday Detector

//Make a program that will log the current day by Name

// Step 1: Create a fat arrow function to determine the current day
const getWeekday = () => {
    // Step 2: Use the Date object to get today's date
    const today = new Date();

    // Step 3: Get the day of the week as a number (0 = Sunday, 6 = Saturday)
    const dayNumber = today.getDay();

    // Step 4: Create an array of weekday names
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Step 5: Return the current day name
    return days[dayNumber];
};

// Step 6: Call the function and log the result
console.log("Today is:", getWeekday());