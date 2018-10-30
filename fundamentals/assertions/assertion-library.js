/**
 * @description assertion library example - refactoring tests into a utlity
 */

const {sum, subtract} = require('./math')

let result, expected

result = sum(3, 7)
expected = 10
expect(result).toBe(expected)

result = subtract(7, 3)
expected = 2
expect(result).toBe(expected)

function expect(actual) {
    console.log(`the value is ${actual}`)
    return {
        toBe(expected) {
            if (actual === expected) {
                console.log(`tests pass ✅`)
            } else {
                throw new Error(`${actual} is not equal to ${expected} ❌`)
            }
        }
    }
}