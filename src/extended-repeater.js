const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { addition,repeatTimes,additionRepeatTimes, separator = '+', additionSeparator = '|'}) {
  const repeat = (s, count, sep) => {
    let out = s;
    for(let i=0; i<count-1; i++) {
      out = `${out}${sep}${s}`;
    }
    return out;
  }

  let res = str;
  if (addition !== undefined) {
    res = str + repeat(
      addition,
      additionRepeatTimes,
      additionSeparator
    )
  }

  return repeat(
    res,
    repeatTimes,
    separator
  );
}

module.exports = {
  repeater
};
