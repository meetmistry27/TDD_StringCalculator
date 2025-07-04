const StringCalculator = require('../src/stringCalculator');

describe('StringCalculator', () => {
  it('should return 0 for an empty string', () => {
    expect(StringCalculator.add('')).toBe(0);
  });

  it('should return the sum of a single number', () => {
    expect(StringCalculator.add('5')).toBe(5);
  });
  
  it('should return the sum of two numbers', () => {
    expect(StringCalculator.add('1,2')).toBe(3);
  });

  it('should return the sum of multiple numbers', () => {
    expect(StringCalculator.add('1,2,3')).toBe(6);
  });
});