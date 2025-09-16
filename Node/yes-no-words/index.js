import yesNoWords from "yes-no-words";

let noArray = [];
let yesArray = [];
let count = 0;

while (count < 5){
    noArray.push(yesNoWords.noRandom())
    noArray.push(yesNoWords.yesRandom())
    count++
}

const newArray = [...noArray, ...yesArray]

console.log(newArray)