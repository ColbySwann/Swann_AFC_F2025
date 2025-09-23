const {convertF, convertC} = require('./index')

describe("Functionality = API Contracts", () => {
    test("does the function exist", () => {
        expect(typeof convertF).toBe("function")
    });

    test("does the Celsius function exist", () => {
        expect(typeof convertC).toBe("function")
    })

    test("should accept correct number of parameters", () => {
        expect(convertF.length).toBe(1);
    })

    test("should accept correct number of parameters for Celsius", () => {
        expect(convertC.length).toBe(1);
    })

    test("should not accept String", () => {
        expect(convertF("String")).toBe("error")
    })

    test("should not accept boolean", () => {
        expect(convertF(true)).toBe("error")
    })

    test("should not accept array", () => {
        expect(convertF([1,2])).toBe("error")
    })

    test("should not accept obj", () => {
        expect(convertF({ })).toBe("error")
    })

    test("should not accept null", () => {
        expect(convertF(null)).toBe("error")
    })

    test("should not accept infinity", () => {
        expect(convertF(Infinity)).toBe("error")
    })

})

describe("Math Functionality", () => {
    test("convert f to c", () => {
        expect(convertF(32)).toBe(0);
    })

    test("convert c to f", () => {
        expect(convertC(0)).toBe(32);
    })

    test("should round up to nearest whole number", () => {
        expect(convertF(25)).toBe(-4);
    })

    test("should round up to nearest whole number", () => {
        expect(convertC(33)).toBe(91);
    })
})
