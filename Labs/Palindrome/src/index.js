function isPalindrome(input){
    if (typeof input !== "string"){
        return false;
    }
    if (input.trim() === ""){
        return false;
    }
    const lowerCaseNoSpace = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    if (lowerCaseNoSpace === lowerCaseNoSpace.split('').reverse().join('')) {
        return true;
    }else
        return false;


}


module.exports = isPalindrome;