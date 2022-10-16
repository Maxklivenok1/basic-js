const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
    return arr.reduce(function(acc, cur) {
        if (Array.isArray(cur)) {
            acc += countCats(cur)
        } else {
            if (cur === "^^") {
                acc++
            }
        }
        return acc
    }, 0)
}

module.exports = {
    countCats
};