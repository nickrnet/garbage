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
            //
        } catch (err) {
            // console.error(err, properties);
            throw err;
        }
    }

    /**
     * Gets players for a game.
     */
    getPlayers = () => {
        // TODO
    }

    /**
     * Deals cards to the players.
     */
    dealCards = () => {
        // TODO
    }
}

export default Game;