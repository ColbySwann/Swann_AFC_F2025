

// let squareFunction = (num) => {
//     return ("Sqaure" + " " + num*num)
// }
//
// console.log(squareFunction(4))
//
//
// let areaOfRectangle = (length, width) => {
//     return length * width;
// }
//
// console.log(areaOfRectangle(4,3))
//
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function(){
//         return this.firstName + " " + this.lastName
//     }
// };
//
// console.log(person.fullName())

let array1 = ["apple", "banana", "Apple", "Orange", "aPricot", "orange"];
let notArray = 4

let sortedArray = (array) => {
    if(!Array.isArray(array)){
        return "Not an Array";
    }else{
        let newArray = array.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        return newArray
    }
}

console.log(sortedArray(array1));