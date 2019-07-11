/**
 * A playing card discard pile object.
 * @class Discard
 * @param {object} properties an object containing the properties to use for this deck.
 * @property cards {array} the cards of the discard pile.
 */
class Discard {
    constructor (properties) {
        try {
            // TODO: Improve this `properties` sanity check.
            if (!properties) {
                properties = {};
            }
            JSON.stringify(properties);
            this.cards = properties.cards;
            
            if (!this.cards) {
                this.cards = [];
            }
        } catch (err) {
            // console.error(err, properties);
            throw err;
        }
    }

    /**
     * Draws the top card from this discard.
     * @returns {Card}
     */
    draw = () => {
        if (this.cards) {
            return this.cards.pop();
        } else {
            console.error(`Tried to draw from discard when no cards available.`);
            console.trace();
        }
    }

    /**
     * Places a Card on the top of this discard.
     * @returns {Card}
     */
    place = (card) => {
        this.cards.push(card);
        return this.cards;
    }
}

Discard.prototype.toString = function () {
    return JSON.stringify(this);
}

export default Discard;