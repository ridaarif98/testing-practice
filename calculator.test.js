const Calculator = require('./calculator.js');

const cal = new Calculator();

describe('Addition', () => {
  test('Sum should return 4', () => {
    expect(cal.add(2, 2)).toBe(4);
  });

  test('Sum should return num1 and num2 should be numbers', () => {
    expect(cal.add('a', 2)).toBe('num1 and num2 should be numbers');
  });

  test('Sum should return num1 and num2 should be numbers', () => {
    expect(cal.add('a', 'b')).toBe('num1 and num2 should be numbers');
  });
});

describe('Subtract', () => {
  test('Subtract should return 4', () => {
    expect(cal.subtract(6, 2)).toBe(4);
  });

  test('Subtract should return num1 and num2 should be numbers', () => {
    expect(cal.subtract('a', 2)).toBe('num1 and num2 should be numbers');
  });

  test('Subtract should return num1 and num2 should be numbers', () => {
    expect(cal.subtract(6, 'b')).toBe('num1 and num2 should be numbers');
  });
});

describe('Multiply', () => {
  test('Multiply should return 10', () => {
    expect(cal.multiply(5, 2)).toBe(10);
  });

  test('Multiply should return num1 and num2 should be numbers', () => {
    expect(cal.multiply('a', 2)).toBe('num1 and num2 should be numbers');
  });

  test('Multiply should return 36', () => {
    expect(cal.multiply(6, 6)).toBe(36);
  });
});

describe('Divide', () => {
  test('Divide should return 5', () => {
    expect(cal.divide(10, 2)).toBe(5);
  });

  test('Divide should return num1 and num2 should be numbers', () => {
    expect(cal.divide('a', 2)).toBe('num1 and num2 should be numbers');
  });

  test('Divide should return num2 cannot be zero', () => {
    expect(cal.divide(6, 0)).toBe('num2 cannot be zero');
  });
});