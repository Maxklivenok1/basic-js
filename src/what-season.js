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
    if (!date) return 'Unable to determine the time of year!';

    const now = date.getMounth();
    const season = ['winter', 'spring', 'summer', 'fall'];
    const month = [
        [11, 0, 1],
        [2, 3, 4],
        [5, 6, 7],
        [8, 9, 10]
    ];
    return month.forEach((hui, num) => {
        if (hui.includes(now)) {
            return season[num]
        }
    })
}


module.exports = {
    getSeason
};