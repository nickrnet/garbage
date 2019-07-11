import Suit from './Suit.js';
/**
 * A playing card deck object.
 * @class Deck
 * @param {object} properties an object containing the properties to use for this deck.
 * @property cards {array} the cards of the deck,
 * @property suits {array} the suits of the deck.
 */
class Deck {
    constructor (properties) {
        try {
            let cards, suits;
            // TODO: Improve this `properties` sanity check.
            if (!properties) {
                properties = {};
            }
            JSON.stringify(properties);
            if (properties) {
                cards = properties.cards;
                suits = properties.suits;
            }
            this.cards = cards || [];
            this.suits = suits || {};
            
            if (this.suits && this.suits.clubs) {
                this.suits.clubs = properties.suits.clubs;
                this.suits.diamonds = properties.suits.diamonds;
                this.suits.hearts = properties.suits.hearts;
                this.suits.spades = properties.suits.spades;
            } else {
                this.suits.clubs = new Suit({name: "clubs"});
                this.suits.diamonds = new Suit({name: "diamonds"});
                this.suits.hearts = new Suit({name: "hearts"});
                this.suits.spades = new Suit({name: "spades"});
            }
            this.cards = this.cards.concat(this.suits.clubs.cards, this.suits.diamonds.cards, this.suits.hearts.cards, this.suits.spades.cards);
        } catch (err) {
            // console.error(err, properties);
            throw err;
        }
    }

    /**
     * Draws the top card from this deck.
     * @returns {Card}
     */
    draw = () => {
        if (this.cards) {
            return this.cards.pop();
        } else {
            console.error(`Tried to draw from deck when no cards available.`);
            console.trace();
        }
    }

    /**
     * Shuffles this deck.
     * @param {number} times The number of times to shuffle the deck.
     * @returns {array} cards The shuffled deck of cards.
     */
    shuffle = (times = 1) => {
        // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
        let card = {},
            i, rando;
        for (time = 1; time <= times; time++) {
            for (i = this.cards.length - 1; i > 0; i--) {
                rando = Math.floor(Math.random() * (i + 1));
                card = this.cards[i];
                this.cards[i] = this.cards[rando];
                this.cards[rando] = card;
            }
        }
        return this.cards;
    }
}

Deck.prototype.toString = function () {
    return JSON.stringify(this);
}

export default Deck;