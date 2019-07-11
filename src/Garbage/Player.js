import Deck from './Deck.js';
import Discard from './Discard.js';
/**
 * A player object.
 * @class Player
 * @param {object} properties an object containing the properties to use for this player.
 * @property name {string} the name of the player,
 * @property faceDownCards {array} the player's face down cards,
 * @property faceUpCards {array} the player's face up cards,
 * @property slots {array} the player's slots,
 * @property card {card} the player's current card.
 */
class Player {
    constructor (properties) {
        try {
            // TODO: Improve this `properties` sanity check.
            if (!properties) {
                properties = {};
            }
            JSON.stringify(properties);
            this.card = null;
            this.name = properties.name || "";
            this.faceDownCards = properties.faceDownCards || [];
            this.faceUpCards = properties.faceUpCards || [];
            this.slots = properties.slots || [];

            if (!this.name) {
                throw `Invalid name for player specified: ${this.name}`;
            }
            if (!this.slots) {
                this.slots = [];
            }
        } catch (err) {
            // console.error(err, properties);
            throw err;
        }
    }

    drawFromDeck = () => {
        this.card = Deck.draw();
    }

    drawFromDiscard = () => {
        this.card = Discard.draw();
    }

    placeCardInSlot = () => {
        // TODO: Handle Jacks, Queens and Kings: 11, 12, and 13
        if (this.faceDownCards.length <= this.card.value) {
            let slotCard = this.faceDownCards[this.card.value];
            this.faceupCards.push(this.card);
            this.card = slotCard;
        } else {
            this.discardCard();
        }
    }

    discardCard = () => {
        Discard.place(this.card);
        this.card = null;
    }
}

Player.prototype.toString = function () {
    return JSON.stringify(this);
}

export default Player;