/**
 * @format
 */

import Deck from '../game/Deck';
import Discard from '../game/Discard';
import Player from '../game/Player';

let deck, discard, player;

describe('discard tests', () => {
  beforeEach(() =>{
    deck = new Deck();
    discard = new Discard();
    player = new Player({name: 'Neo'});
    deck.shuffle();
    player.drawFromDeck(deck);
    player.discardCard(discard);
  });

  describe('discard properties', () => {
    it('should have cards', () => {
      expect(discard.cards.length).toBe(1);
    });
  });

  describe('discard methods', () => {
    it('should draw a card', () => {
      player.drawFromDiscard(discard);
      expect(player.card.value).toBeGreaterThan(0);
      expect(discard.cards.length).toBe(0);
    });

    it('should not draw when no cards available', () => {
      expect(() => {
        discard.cards.length = 0;
        player.drawFromDiscard(discard);
      }).toThrow();
    })

    it('should place a card', () => {
      player.drawFromDeck(deck);
      player.discardCard(discard);
      expect(player.card).toBe(null);
      expect(discard.cards.length).toBe(2);
    });
  });
});