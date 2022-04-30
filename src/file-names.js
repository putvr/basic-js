const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  return names.map((name, idx) => {
    if(names.slice(idx+1, names.length).includes(base)) {
      
      let [base, counter = ''] = name.split('('); 

      counter = counter ? 1 : counter.split(')')[0] + 1;
      return `${base}(${counter})`;
    }

    return name;

  });
}

module.exports = {
  renameFiles
};
