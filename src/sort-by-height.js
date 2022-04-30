const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  const position = arr
    .map((elem, idx) => elem === -1 ? idx : undefined)
    .filter(val => val !== undefined);

  arr = arr.filter(elem => elem !== -1).sort((a,b) => a-b);

  for(let idx of position){
    arr.splice(idx, 0, -1);
  }

  return arr;
}

module.exports = {
  sortByHeight
};
