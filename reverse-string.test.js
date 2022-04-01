// reverse-string.test.js

const reverseString = require("./reverse-string");

const mochTest = {
  input: {
    1: 'haduJ',
    2: 'AHCOM',
    3: 'dnimreveN'
  },
  output: {
    1: 'Judah',
    2: 'MOCHA',
    3: 'Nevermind'
  }
};

const testSize = Object.keys(mochTest.input).length;

for (let i = 1; i <= testSize; i++){
  test('Tests ahead:', () => {
    expect(reverseString(mochTest.input[i])).toBe(mochTest.output[i]);
  });  
}