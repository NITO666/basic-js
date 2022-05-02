const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additionArray = [],
      repeat = []; 
  
  if (options.addition === undefined) options.addition = '';
  if (!options.additionRepeatTimes) additionArray.push(options.addition);
  if (!options.repeatTimes) repeat.push(str + additionArray.join(options.additionSeparator ? options.additionSeparator : '|'));
  
  for (let i = 0; i < options.additionRepeatTimes; i++) additionArray.push(options.addition+'');
  for (let i = 0; i < options.repeatTimes; i++ ) repeat.push(str + additionArray.join(options.additionSeparator ? options.additionSeparator : '|'));
  
  return repeat.join(options.separator ? options.separator : '+');
}

module.exports = {
  repeater
};
