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
            this.cards = properties.cards || [];
            
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
        // TODO: Add checks for Jacks, Queens, Kings on top.
        if (this.cards && this.cards.length) {
            return this.cards.pop();
        } else {
            throw new Error(`Tried to draw from discard when no cards available.`);
        }
    }

    /**
     * Places a Card on the top of this discard.
     * @param {card} card A card to place on top of the discard pile.
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