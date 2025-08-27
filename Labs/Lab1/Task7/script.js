// script.js
// Name: Colby Swann
// Task7 - Grade Classification

// Step 1: Create a fat arrow function named classifyGrade with a grade string passed as the parameter
const classifyGrade = (grade) =>
    // Step 2: Use ternary operators to classify each grade instead of a traditional if/else statement
    (grade >= 90) ? "A" :
        (grade >= 80) ? "B" :
            (grade >= 70) ? "C" :
                (grade >= 60) ? "D" :
                    "F";

// Step 3: Prompt the user to input a grade as a number
const input = prompt("Enter a grade (0-100):");

// Step 4: Convert the input into a number
const grade = Number(input);

// Step 5: Validate the input has a number value and pass an error if value is not a number
if (Number.isNaN(grade)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 6: Call the fat arrow function and log the result
    const classification = classifyGrade(grade);
    console.log("The grade classification is:", classification);
}