const StringCalculator = {
    // Refactored for test: add('') should return 0
    add(numbers) {
        if (numbers === "") {
            return 0;
        }
    // Refactored for test: 
    const numArray = numbers.split(',');
    const numberList = numArray.map(num => parseInt(num, 10));
    return numberList.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = StringCalculator;