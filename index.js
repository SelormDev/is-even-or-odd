/**
 * Checks if a number is even or odd.
 * @param {number} num - The number to check.
 * @returns {string} - "even" if the number is even, "odd" if the number is odd.
 */
function isEvenOrOdd(num) {
    if (typeof num !== "number") {
        throw new Error("Input must be a number");
    }
    return num % 2 === 0 ? "even" : "odd";
}

/**
 * Checks if a number is even.
 * @param {number} num - The number to check.
 * @returns {boolean} - Returns true if the number is even, otherwise false.
 */
function isEven(num) {
    // Use the modulo operator (%) to check for a remainder of 0 when divided by 2.
    return num % 2 === 0;
}

/**
 * Checks if a number is odd.
 * @param {number} num - The number to check.
 * @returns {boolean} - Returns true if the number is odd, otherwise false.
 */
function isOdd(num) {
    // A number is odd if it's not even.
    return num % 2 !== 0;
}

// Export the functions so they can be used in other projects.
export { isEven, isOdd, isEvenOrOdd };
