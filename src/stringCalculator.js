const StringCalculator = {
    add(numbers) {
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
    return numberList.reduce((sum, num) => sum + num, 0);
    }

};

module.exports = StringCalculator;