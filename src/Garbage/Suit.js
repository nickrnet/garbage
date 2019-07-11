import Card from './Card.js';
/**
 * A playing card suit object.
 * @class Suit
 * @param {object} properties an object containing the properties to use for this suit.
 * @property name {string} the name of the suit,
 * @property cards {array} the cards of the suit.
 */
class Suit {
    constructor (properties) {
        try {
            // TODO: Improve this `properties` sanity check.
            if (!properties) {
                properties = {};
            }
            JSON.stringify(properties);
            this.name = properties.name || "";
            this.cards = properties.cards || [];

            if (!this.name) {
                throw `Invalid name for suit specified: ${this.name}`;
            }
            if (!this.cards || this.cards.length !== 13) {
                this.cards = [];
                // [{name: 'Ace', value: 1}, {name: '2', value: 2}, {name: '3', value: 3}, {name: '4', value: 4}, {name: '5', value: 5}, {name: '6', value: 6}, {name: '7', value: 7}, {name: '8', value: 8}, {name: '9', value: 9}, {name: '10', value: 10}, {name: 'Jack', value: 11}, {name: 'Queen', value: 12}, {name: 'King', value: 13}]
                for (i = 1; i <= 13; i++) {
                    this.cards.push(new Card({suit: this.name, value: i}));
                }
            }
        } catch (err) {
            // console.error(err, properties);
            throw err;
        }
    }
}

Suit.prototype.toString = function () {
    return JSON.stringify(this);
}

export default Suit;