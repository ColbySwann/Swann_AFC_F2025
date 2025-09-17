"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perimeter = exports.areaOfRectangle = void 0;
const areaOfRectangle = (width, length) => {
    return width * length;
};
exports.areaOfRectangle = areaOfRectangle;
const perimeter = (width, length) => {
    return (width * 2) + (length * 2);
};
exports.perimeter = perimeter;
