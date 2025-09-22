const add = require('../src/demo');

test('should add two numbers', () => {
    expect(add(1,2)).toBe(3);
});

test('should not be equal', () => {
    expect(add(1,2)).not.toBe(4);
});

describe("Subtraction tests", () => {

    test("should subtract two numbers", () => {
        expect(subtract(5,3)).toBe(2);
    });
});