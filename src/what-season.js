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

  if(Object.getOwnPropertyNames(date).length > 0){
    throw Error('Invalid date!');
  }
 
  const m = date.getMonth();

	if (m > 1 && m < 5) {
		return 'spring';
	}
	if (m > 4 && m < 8) {
		return 'summer';
	}
	if (m > 7 && m < 11) {
		return 'autumn';
	}
	return 'winter';
}

module.exports = {
  getSeason
};
