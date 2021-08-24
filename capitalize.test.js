const capitalizeString = require('./capitalize.js');

test('test to equal Test', () => {
  expect(capitalizeString('test')).toBe('Test');
});