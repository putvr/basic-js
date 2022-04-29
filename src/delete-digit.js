const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const s = String(n);

  for(let i=0; i<s.length; i++ ) {
    const num = Number(`${s.slice(0,i)}${s.slice(i+1, s.length)}`);
    if(num > max) {
      max = num;
    }
  }
  
 return max;
}

module.exports = {
  deleteDigit
};
