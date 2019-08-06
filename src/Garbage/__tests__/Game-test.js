/**
 * @format
 */

import Game from '../game/Game';
import Player from '../game/Player';

let game;

describe('game tests', () => {
  beforeEach(() => {
    game = new Game({players: [new Player({name: 'Neo'}), new Player({name: 'Cypher'})]});
  });

  describe('game properties', () => {
    it('should have a dealer', () => {
      expect(game.dealer).toBe(0);
    });
    
    it('should have a deck', () => {
      expect(game.deck).not.toBe(null);
      expect(game.deck.cards.length).not.toBe(0);
    });

    it('should have a discard pile', () => {
      expect(game.discard).not.toBe(null);
    });

    it('should have players', () => {
      expect(game.players.length).toBe(2);
    });

    it('should start at round 1', () => {
      expect(game.round).toBe(1);
    });
  });

  describe('game methods', () => {
    it('should get players', () => {
      expect(game.players.length).toBe(2);
    });

    it('should deal the correct number of cards to each player', () => {
      let cardsDealt = 0;
      let remainingCards = 0;
      let totalCards = game.deck.cards.length;
      game.generatePlayers();
      game.dealCards();
      game.players.forEach(player => {
        cardsDealt = cardsDealt + player.faceDownCards.length;
      });
      remainingCards = totalCards - cardsDealt;
      expect(game.players[0].faceDownCards.length).toBe(game.players[0].slots);
      expect(game.players[1].faceDownCards.length).toBe(game.players[1].slots);
      expect(game.players[2].faceDownCards.length).toBe(game.players[2].slots);
      expect(game.players[3].faceDownCards.length).toBe(game.players[3].slots);
      expect(game.deck.cards.length).toBe(remainingCards);
    });
  });
});