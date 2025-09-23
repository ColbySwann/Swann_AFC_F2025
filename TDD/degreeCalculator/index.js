function convertF(input){
    if (typeof input !== "number" || input === Infinity)
    return "error"
    else
        return Math.round((input-32) * 5/9);

}

function convertC(input){
    if (typeof input !== "number" || input === Infinity)
        return "error"
    else
        return Math.round((input * 1.8) + 32);

}

module.exports = {
    convertF,
    convertC
};