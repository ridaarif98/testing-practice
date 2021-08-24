const stringLength = require('./string.js');

describe('stringLength(str) - a function that takes a string and return its charcater count', () => {
  test('stringLength("Hello World !") should return an error msg', () => {
    expect(stringLength('Hello World !')).toBe('String should be 1 charcter long and less than 10 charcaters');
  });

  test('stringLength("123abcd3") should resturn 8.', () => {
    expect(stringLength('123abcd3')).toBe(8);
  });

  test('stringLength("") should resturn an error msg.', () => {
    expect(stringLength('')).toBe('String should be 1 charcter long and less than 10 charcaters');
  });
});