const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let result = true;
  let array = n.split('-');
  if (array.length != 6) result = false;;
  array.forEach(item => {
    if (item.split('').length != 2)result =  false;
    else item.split('').forEach(letter => {
        if (!['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F'].includes(letter.toString())) result =  false;
     })
    }
  )
  return result;
}
module.exports = {
  isMAC48Address
};
