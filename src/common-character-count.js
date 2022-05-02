const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let array = s2.split('');
  let result = s1.split('').reduce((acc,item) => {
    const index = array.indexOf(item);
    if (index != -1){
      array.splice(index,1)
      return acc = acc + 1;
    } else {
      return acc;
    }
  },0);
  return result;
}

module.exports = {
  getCommonCharacterCount
};
