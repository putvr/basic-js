const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!';
  }

  if(!(date instanceof Date)) {
    throw Error('Invalid date!');
  }
  const n1 = new Date(Date.parse(date.valueOf()));

  const n2 = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );

  if(date - n2 !== 0) {
    throw Error('Invalid date!');
  }
 
  const m = date.getMonth();

  if (m <= 1 || m === 11) {
    return 'winter';
  }
  if (m <= 4) {
    return 'spring';
  }  
  if (m <= 7) {
    return 'summer';
  } else {
    return 'autumn';
  }

}

module.exports = {
  getSeason
};
