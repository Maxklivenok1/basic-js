const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length
    },
    addLink(value) {
        if (value == '') {
            this.chain.push('');
            return this
        } else if (value == null) {
            this.chain.push('null');
            return this
        } else {
            this.chain.push(value.toString());
            return this
        }

    },
    removeLink(position) {
        if (position <= 0 || position > this.chain.length || isNaN(position)) {
            this.chain = [];
            throw new Error("You can't remove incorrect link!")
        } else {
            this.chain.splice(position - 1, 1);
            return this
        }
    },
    reverseChain() {
        this.chain.reverse();
        return this
    },
    finishChain() {
        return this.chain.map(item => `( ${item} )`).join('~~');

    }
};

module.exports = {
    chainMaker
};