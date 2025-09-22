const isPalindrome = require('../src/index');

describe('Palidrome Structure test', () => {
    test('should remove spaces', () => {
        expect(isPalindrome("Super Cat is Lame")).toBe(false);
    })

    test('should return false for empty string', () => {
        expect(isPalindrome(" ")).toBe(false);
    })

    test('should return false if not a string', () => {
        expect(isPalindrome(12)).toBe(false);
    })

    test('should return false if passed a boolean', () => {
        expect(isPalindrome(true)).toBe(false);
    })
})
describe('Should Pass Palindrome', () => {
    test('should return true with all lowercase', () => {
        expect(isPalindrome("racecar")).toBe(true);
    })

    test('should return true with mix upper and lower', () => {
        expect(isPalindrome("RaceCar")).toBe(true);
    })

    test('should return true with sentence', () => {
        expect(isPalindrome("taco cat")).toBe(true);
    })

    test('should return true with mix case, spaces, and mixed characters', () => {
        expect(isPalindrome("Cigar? Toss it in a can. It is so tragic")).toBe(true);
    })
})
