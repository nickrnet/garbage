/**
 * A player object.
 * @class Player
 * @param {object} properties an object containing the properties to use for this player.
 * @property name {string} the name of the player,
 * @property faceDownCards {array} the player's face down cards,
 * @property faceUpCards {array} the player's face up cards,
 * @property slots {number} the player's slots to flip,
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
            this.slots = properties.slots || 10;

            if (!this.name) {
                throw `Invalid name for player specified: ${this.name}`;
            }
            if (!this.slots) {
                this.slots = 10;
            }
        } catch (err) {
            // console.error(err, properties);
            throw err;
        }
    }

    /**
     * Draws a card from a deck and sets it as the Player's card.
     * @param {deck} deck A Deck to draaw from.
     */
    drawFromDeck = (deck) => {
        this.card = deck.draw();
    }

    /**
     * Draws a card from the discard pile and sets it as the Player's card.
     * @param {discard} discard A discard pile.
     */
    drawFromDiscard = (discard) => {
        this.card = discard.draw();
    }

    /**
     * Places the player's card in the appropriate slot.
     */
    placeCardInSlot = () => {
        // TODO: Handle Jacks, Queens and Kings: 11, 12, and 13
        if (this.faceDownCards.length <= this.card.value) {
            let slotCard = this.faceDownCards[this.card.value];
            this.faceUpCards.push(this.card);
            this.card = slotCard;
        } else {
            this.discardCard();
        }
    }

    /**
     * Discards the player's current card.
     * @param {discard} discard A discard pile.
     */
    discardCard = (discard) => {
        discard.place(this.card);
        this.card = null;
    }
}

Player.prototype.toString = function () {
    return JSON.stringify(this);
}

export default Player;