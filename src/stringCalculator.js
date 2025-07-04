const StringCalculator = {
    // Refactored for test: add('') should return 0
    add(numbers) {
        if (numbers === "") {
            return 0;
        }
    }
}

module.exports = StringCalculator;