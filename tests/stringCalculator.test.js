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

  it('should handle newline between numbers as a valid delimeter', () => {    
    expect(StringCalculator.add('1\n2,3')).toBe(6);
  });

  it('should handle custom delimiters specified in the format "//[delimiter]\n[numbers]"', () => {
    expect(StringCalculator.add('//;\n1;2;3')).toBe(6);
  });

  it('should handle negative numbers by throwing an error', () => {
    expect(() => StringCalculator.add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
    //for multiple negative numbers
    expect(() => StringCalculator.add('1,-2,-3')).toThrow('Negative numbers not allowed: -2, -3');
  });

  it('should return how many times add() was called', () => {
    StringCalculator.add('1,2');
    StringCalculator.add('3,4'); 
    expect(StringCalculator.getCalledCount()).toBe(2);
  }); 

  it('should ignore Numbers bigger than 1000', () => {
    expect(StringCalculator.add('2,1001')).toBe(2);
    expect(StringCalculator.add('1000,2')).toBe(1002);
    expect(StringCalculator.add('1000,1001')).toBe(1000);
  });

  it('should handle delimiters of any length', () => {
    expect(StringCalculator.add('//[***]\n1***2***3')).toBe(6);
    expect(StringCalculator.add('//[--]\n1--2--3')).toBe(6);
    expect(StringCalculator.add('//[%%%]\n1%%%2%%%3')).toBe(6);
    expect(StringCalculator.add('//[.*]\n1.*2.*3')).toBe(6);
  });

  it('should support multiple single-character delimiters like //[*][%]\\n', () => {
  expect(StringCalculator.add("//[*][%]\n1*2%3")).toBe(6);
  });

  it('should support multiple multi-character delimeters' ,
    () => {expect(StringCalculator.add("//[**][%%]\n1**2%%3")).toBe(6);});

});