const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let out = [str[0]];
  let zip = [];

  for(let s of str.slice(1)) {
    const zipLast = zip[zip.length-1];

    if(s === zipLast) {
      zip.push(s);
      continue;
    }

    const l = `${zip.length}${s}`;

    out.push(l);
    zip = [];

    // const outLast = out[out.length-1];
    
  }

  return out.join('');
}

module.exports = {
  encodeLine
};
