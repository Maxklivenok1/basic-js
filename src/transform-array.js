const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (Array.isArray(arr)) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] == 'number') {
                newArr.push(arr[i]);
            } else if (arr[i] == '--discard-next') {
                i++
            } else if (arr[i] == '--discard-prev') {
                newArr.splice(i - 1, 1);
            } else if (arr[i] == '--double-next') {
                newArr.splice(i, 0, arr[i + 1]);
            } else if (arr[i] == '--double-prev') {
                newArr.splice(i - 1, 0, arr[i - 1]);
            }
        }
        return newArr
    }
    throw new Error("'arr' parameter must be an instance of the Array!")


}

module.exports = {
    transform
};