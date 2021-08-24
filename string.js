function stringLength(str) {
  if (str.length < 1 || str.length > 10) {
    return 'String should be 1 charcter long and less than 10 charcaters';
  }
  return str.length;
}
module.exports = stringLength;