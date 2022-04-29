const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {

  if(!(arr instanceof Array)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }

  let out = [];

  for(let i = 0; i < arr.length; i++) {
    const v = arr[i];

    switch(v){
      case '--discard-next':
        out.push(undefined);
        i++;
        break;
      case '--discard-prev':
        out.pop();
        break;
      case '--double-next':
        out.push(arr[i+1]);
        break;
      case '--double-prev':
        const t = out.pop();
        if(t){
          out.push(t);
          out.push(t);
        }
        break;
      default:
        out.push(v);
    }
  }

  return out.filter(e => e !== undefined);
}

module.exports = {
  transform
};
