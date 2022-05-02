const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  array = str.split('');
  let current = array[0];
  let count = 0;
  for (let i = 0; i <= array.length; i++){
    if (current === array[i]) count = count + 1;
    else {
      count === 1 ? result.push(current) : result.push(`${count}${current}`);
      current = array[i];
      count = 1;
    }
  }
  return result.join('');
}

module.exports = {
  encodeLine
};
