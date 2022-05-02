const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(e) {
  if(isNaN(Number(e)) || Number(e) < 1 || typeof(e) != 'string'){
    return false
  }else{
     let a = Math.ceil(Math.log(MODERN_ACTIVITY/Number(e))/(693/HALF_LIFE_PERIOD)*1000)
     if (a > 0){
       return a
     }else{
       return false
     }
  }
}

module.exports = {
  dateSample
};
