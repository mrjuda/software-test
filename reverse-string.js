// reverse-string.js

function reverseString(str) {
  const strArr = str.split('');
  const strArrRev = strArr.reverse();
  const reversedString = strArrRev.join('');
  return reversedString;
}

console.log(reverseString('aiu'));

module.exports reverseString;