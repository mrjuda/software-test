// reverse-string.js

function reverseString(str) {
  const reversedString = str.split("").reverse().join("");
  return reversedString;
}

// console.log(reverseString('aiu'));

module.exports = reverseString;