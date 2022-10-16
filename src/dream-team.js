const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( /* members */ ) {
    try {
        let huilo = []
        for (let item of members) {
            if (Array.isArray(item)) {
                createDreamTeam(item)
            } else {
                if (typeof item === 'string') {
                    huilo.push(item.trim()[0].toUpperCase());
                }
            }
        }
        console.log(huilo)
        const answer = huilo.sort().join('');
        return answer
    } catch (error) {
        return false
    }
}

module.exports = {
    createDreamTeam
};