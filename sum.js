// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;

function strSize(str) {
  return str.length;
}

function testStrSize(mockStr) {
  const mockStrSize = strSize(mockStr);

  if (mockStrSize < 1) {
    return 'It has less than 1 char';
  } else if (mockStrSize > 10) {
    return 'It has more than 10 chars';
  } else {
    return 'It has ' + mockStrSize + ' chars';
  }
}

const test1 = '';
const test2 = '7 chars';
const test3 = 'I have 16 chars';

console.log(testStrSize(test1));