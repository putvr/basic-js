const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper( matrix ) {
  const count = (x,y) => {
    const nb = [];
    // 🧟🧟🧟🧟🧟🧟
    if(matrix[x-1]){
      if(matrix[x-1][y-1]) {
        nb.push(matrix[x-1][y-1])
      }
      if(matrix[x-1][y]) {
        nb.push(matrix[x-1][y])
      }
      if(matrix[x-1][y+1]) {
        nb.push(matrix[x-1][y+1])
      }
    }


    if(matrix[x][y-1]) {
      nb.push(matrix[x][y-1])
    }
    if(matrix[x][y+1]) {
      nb.push(matrix[x][y+1])
    }

    if(matrix[x+1]){
      if(matrix[x+1][y-1]) {
        nb.push(matrix[x+1][y-1])
      }
      if(matrix[x+1][y]) {
        nb.push(matrix[x+1][y])
      }
      if(matrix[x+1][y+1]) {
        nb.push(matrix[x+1][y+1])
      }
    }
    return nb.filter(e => e === true).length;
  }

  let res = JSON.parse(JSON.stringify(matrix));
  
  for(let i=0;  i< matrix.length; i++) {
    for(let j=0; j < matrix[i].length; j++){
      res[i][j] = count(i,j);
   }
  }

  return res;
}

module.exports = {
  minesweeper
};
