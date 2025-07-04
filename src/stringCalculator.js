const StringCalculator = {
    // Refactored for test: add('') should return 0
    add(numbers) {
        if (numbers === "") {
            return 0;
        }

        // Refactored for test: return numbeer itself when one input is passed
        const singleNumber = Number(numbers);
        return singleNumber;
    }
}

module.exports = StringCalculator;