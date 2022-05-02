const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(m) {
  let result = []
  let result1 = ''
  let a = ''
  let b = 0
 if(typeof(m) === 'object' && m != null){
   if(m.length > 0){
     for(let i = 0; i < m.length;i++){
       if(typeof(m[i]) == 'string'){
        if(m[i][0]==' '){
          m[i] = m[i].replace(/\s/g,'')
        }else{
          m[i] = m[i].split(' ')[0]
          console.log(m[i])
        }
         if(m[i].replace(/[^A-Z]+/g,'') != ''){
          result.push(m[i].replace(/[^A-Z]+/g,''))
         }else{
           result.push(m[i][0])
         }
        }
     }
     for(let i = 0; i < result.length;i++){
       if(result[i] === ''){
          result.splice(i,result.length)
          i = 0
       }else{
          result[i] = result[i][0]
       }
     }
     if(result.length > 0){
       for(let i = 0;i < result.length;i++){
         result[i] = result[i].toUpperCase()
       }
       for(let i = 0; i < result.length;i++){
         for(let j = 0; j < result.length;j++){
           if(result[i].charCodeAt(0) > result[j].charCodeAt(0)){
             a = result[i]
             b = result[i].charCodeAt(0)
             result[i] = result[j]
             result[j] = a
           }
         }
       }
       for(let i = result.length - 1; i >= 0;i--){
        result1 = result1 + result[i]
       }
       return result1
     }else{
       return false
     }
    }else{
      return false
    }
  }else{
    return false
  }
}
module.exports = {
  createDreamTeam
};
