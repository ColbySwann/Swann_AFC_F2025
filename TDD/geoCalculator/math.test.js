const {add, squaredNum} = require("./math")

test('does add() exists', () => {
    expect(typeof add).toBe("function")
})

test('adds two numbers', () => {
    expect(add(1,3)).toBe(4);
});

describe("if function exists with correct parameters", () => {

})
