"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
class Human {
    fname;
    lname;
    age;
    isMarried;
    constructor(fname, lname, age, isMarried) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.isMarried = isMarried;
    }
    getFullName = () => {
        console.log(`Your name is ${this.fname} ${this.lname}`);
    };
    getAge = () => {
        console.log(`You are ${this.age} years old!!!`);
    };
}
exports.Human = Human;
