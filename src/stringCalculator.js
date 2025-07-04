let callCount = 0;
beforeEach(() => {
  StringCalculator.resetCalledCount();
});
const StringCalculator = {
    // Initialize a property to count calls   
    
    add(numbers) {
        callCount++;
        if (numbers === "") return 0;

  //delimeters used before comma and newline
  let delimeter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimeter = new RegExp(parts[0].substring(2));
    numbers = parts.slice(1).join(""); // Remaining part is the numbers
  }
    const numArray = numbers.split(delimeter);
    const numberList = numArray.map(num => parseInt(num, 10));

    const negatives = numberList.filter(num => num < 0);
    if (negatives.length > 0) { 
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
    
    return numberList.reduce((sum, num) => sum + num, 0);
    },

    getCalledCount() {
        return callCount;
    },

    resetCalledCount() {
        callCount = 0;
    }
};

module.exports = StringCalculator;