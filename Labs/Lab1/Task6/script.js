// script.js
// Name: Colby Swann
// Task6 - Student Array Operations

// Step 1: Hardcode an array of student objects with the value of name and age
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];

// Step 2: Create a fat arrow function to update the age of a student when passed the array as a parameter
const updateStudentAge = (array) => {
    // Step 3: Assigns the studentName variable to the value passed from the user prompt
    let studentName = prompt("Enter the student's name to update:");

    // Step 4: uses the find method on the passed array to find the name value within the array from the passed studentName
    let student = array.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    // Step 5: If the value of student is false the console will print an error message
    if (!student) {
        console.log("Error: Student not found.");
        return;
    }

    // Step 6: Prompt the user for a new age and cast the input to a number
    let newAge = Number(prompt("Enter the new age:"));

    // Step 7: Validate the input (must be a number): give error message if value is not a number
    if (Number.isNaN(newAge)) {
        console.log("Error: Age must be a number.");
        return;
    }

    // Step 8: Update the student's age on the student object
    student.age = newAge;

    // Step 9: Log the updated array of students
    console.log("Updated students:", array);
};

// Step 10: Call the arrow function with the students array
updateStudentAge(students);