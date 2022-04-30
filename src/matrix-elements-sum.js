const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
  let sum = arr[0].reduce((a,x) => a+x, 0);  
  
  for(let i=1;  i<arr.length; i++) {
    for(let j=0; j < arr[i].length; j++){
      if(arr[i-1][j] != 0) {
        sum+=arr[i][j]
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
