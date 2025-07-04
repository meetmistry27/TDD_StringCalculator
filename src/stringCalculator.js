const StringCalculator = {
    // Refactored for test: add('') should return 0
    add(numbers) {
        if (numbers === "") {
            return 0;
        }
    // Refactored for test: return number itself when one input is passed
    const numArray = numbers.split(",");
    if (numArray.length === 1) {
        return Number(numArray[0]);
        }
    // Refactored for test: return sum of two numbers when two inputs are passed    
    if (numArray.length === 2) {
        const num1 = Number(numArray[0]);
        const num2 = Number(numArray[1]);
        return num1 + num2;
    }
    }
}

module.exports = StringCalculator;