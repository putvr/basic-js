const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position)){
      this.chain = [];
      throw Error('You can\'t remove incorrect link!');
    }    

    if (position > this.chain.length)  {
      this.chain = [];
      throw Error('You can\'t remove incorrect link!');
    }

    if (position <= 0) {
      this.chain = [];
      throw Error('You can\'t remove incorrect link!');
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain
      .map(e=> `( ${e} )`)
      .join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
