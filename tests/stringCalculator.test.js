const StringCalculator = require('../src/stringCalculator');

describe('StringCalculator', () => {
  it('should return 0 for an empty string', () => {
    expect(StringCalculator.add('')).toBe(0);
  });

});