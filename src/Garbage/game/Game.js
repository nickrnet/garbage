import Deck from './Deck';
import Discard from './Discard';
import Player from './Player';
/**
 * A game object.
 * @class Game
 * @param {object} properties an object containing the properties to use for this game.
 */
class Game {
    constructor (properties) {
        try {
            // TODO: Improve this `properties` sanity check.
            if (!properties) {
                properties = {};
            }
            JSON.stringify(properties);
            this.dealer = properties.dealer || 0;
            this.deck = properties.deck || new Deck();
            this.discard = properties.discard || new Discard();
            this.players = properties.players || [];
            this.round = properties.round || 1;
        } catch (err) {
            // console.error(err, properties);
            throw err;
        }
    }

    /**
     * Gets players for a game.
     */
    generatePlayers = () => {
        // TODO UI bits probably.
        this.players.length = 0;
        let names = ['Neo', 'Cypher', 'Morpheus', 'Trinity'];
        for (i=0; i<4; i++) {
            this.players.push(new Player({name: names[i]}));
        }
    }

    /**
     * Deals cards to the players.
     */
    dealCards = () => {
        let card;
        let cardsToDeal = 0;

        if (this.deck) {
            // TODO: Handle player selecting number of times to shuffle.
            this.deck.shuffle();
        } else {
            throw `No deck to deal from.`;
        }

        if (this.players && this.players.length) {
            // get players' slots
            this.players.forEach(player => {
                cardsToDeal = cardsToDeal + player.slots;
            });
            // deal to players' faceDownCards until each player has no slots left.
            while (cardsToDeal > 0) {
                for (p = 0; p < this.players.length; p++) {
                    if (this.players[p].faceDownCards.length < this.players[p].slots) {
                        card = this.deck.draw();
                        this.players[p].faceDownCards.push(card);
                        // console.log(`Dealt ${card} to ${this.players[p].name}`);
                        --cardsToDeal;
                    } else {
                        throw `Player ${this.players[p].name} has enough cards already.`;
                    }
                }
            }
        } else {
            throw `No players to deal to.`;
        }
        // TODO
    }
}

export default Game;