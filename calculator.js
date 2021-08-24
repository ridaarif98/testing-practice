module.exports = class Calculator {
  add (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return 'num1 and num2 should be numbers';
    }
    return num1 + num2;
  }

  subtract (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return 'num1 and num2 should be numbers';
    }
    return num1 - num2;
  }

  multiply (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return 'num1 and num2 should be numbers';
    }
    return num1 * num2;
  }

  divide (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return 'num1 and num2 should be numbers';
    }
    if (num2 === 0) {
      return 'num2 cannot be zero';
    }
    return num1 / num2;
  }
};