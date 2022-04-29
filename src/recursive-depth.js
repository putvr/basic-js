const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  max = 0;
  calculateDepth(arr, d = 1) { 

    // WTF? 🤯 🤦
    if(d===1 && this.max > 1) {
      this.max = d;
    }

    if(this.max < d) {
      this.max = d;
    }

    for(let elem of arr){
      if(Array.isArray(elem)){
        this.calculateDepth(elem, d + 1);
      }
    }

   
    
    return this.max;
  }
}

module.exports = {
  DepthCalculator
};
