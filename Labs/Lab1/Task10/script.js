// script.js
// Name: Colby Swann
// Task10 - How Long Until Graduation

// Step 1: Create a fat arrow function to determine today's date
const getToday = () => {
    return new Date();
};

// Step 2: Call the function to get the current date
const today = getToday();

// Step 3: Get the name of the current day by looking in an array of days and indexes off today's date
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = days[today.getDay()];

// Step 4: Format the date like 2025, January 21st
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const year = today.getFullYear();
const month = months[today.getMonth()];
const day = today.getDate();

// Step 5: Create a function to get correct ordinal suffix (st, nd, rd, th)
const getSuffix = (n) => {
    if ([11, 12, 13].includes(n % 100)) return "th";
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};
//Concatenate string to create final formatted date
const formattedDate = year + ", " + month +  " " + day + getSuffix(day);

// Step 6: Log today's weekday and date
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);

// Step 7: Calculate days left until last day of coursework (November 13, 2025)
const graduationDate = new Date("2025-11-13");

const diff = graduationDate - today;
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

// Step 8: Log the countdown message
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");