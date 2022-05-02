const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(arr) {
  let c = 0;
    function count(arr){
     if(arr != null){
      for(let i = 0; i < arr.length;i++){
        if(typeof(arr[i]) == 'object'){
          count(arr[i])
        }else{
          if(arr[i] === '^^'){
            c = c + 1
          }
        }
      }
     }
    }
  count(arr)
  return c
}

module.exports = {
  countCats
};
