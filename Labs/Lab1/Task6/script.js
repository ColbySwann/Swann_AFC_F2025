// script.js
// Name: Colby Swann
// Task6 - Student Array Operations

// Step 1: Hardcode an array of student objects
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];

// Step 2: Create a fat arrow function to modify a student's age
const updateStudentAge = (array) => {
    // Step 3: Prompt the user to enter a student's name
    let studentName = prompt("Enter the student's name to update:");

    // Step 4: Find the student object in the array
    let student = array.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    // Step 5: If student is not found, log an error message
    if (!student) {
        console.log("Error: Student not found.");
        return;
    }

    // Step 6: Prompt the user for a new age
    let newAge = Number(prompt("Enter the new age:"));

    // Step 7: Validate the input (must be a number): give error message if invalid
    if (Number.isNaN(newAge)) {
        console.log("Error: Age must be a number.");
        return;
    }

    // Step 8: Update the student's age
    student.age = newAge;

    // Step 9: Log the updated array of students
    console.log("Updated students:", array);
};

// Step 10: Call the arrow function with the students array
updateStudentAge(students);