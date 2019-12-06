const {squareDigits} = require("../functions");

function sum(a, b){
    if(a === undefined || b === undefined){
        return undefined
    }
    return a + b;
}
describe(`"sum" should return the correct and necessary values`, () => {
    test(`"sum" function should return the sum of its parameters`, () => {
        expect(sum(1, 2)).toBe(3)
        expect(sum(2, 3)).toBe(6)
    })
    test(`"sum" function should return undefined if no 2 parameters`, () => {
        expect(sum()).toBe(undefined)
    })
})

describe(`"squareDigits" should return the correct and necessary values`, () => {
    test(`"squareDigits" function should return the squared num`, () => {
        expect(sum(2)).toBe(4)
        expect(sum(10)).toBe(100)
    })
    test(`"squareDigits" function should return undefined when no params`, () => {
        expect(sum()).toBe(undefined)
    })
    test(`"squareDigits" function should return "Invalid parameters" when anything other than a number is passed in`, () => {
        expect(sum("A", "B")).toBe("Invalid Parameters")
        expect(sum([1, 2, 3])).toBe("Invalid Parameters")
    })
})