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
  let delimiters = /[\n,]/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterPart = parts[0].substring(2);
    numbers = parts.slice(1).join("\n");
    
    if (delimiterPart.startsWith("[")) {
        // Match all delimiters inside brackets, e.g. [***][%%]
        const delimiterMatches = delimiterPart.match(/\[([^\]]+)\]/g);
        const delimiterStrings = delimiterMatches.map(d => d.slice(1, -1));
        const escaped = delimiterStrings.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        delimiters = new RegExp(escaped.join('|'));
      } else {
        // Single character delimiter
        delimiters = new RegExp(delimiterPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      }
    // Remaining part is the numbers
  }

    const numArray = numbers.split(delimiters);
    const numberList = numArray.map(num => parseInt(num, 10)).filter(num => num <= 1000);

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