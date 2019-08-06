/**
 * @format
 */

import Deck from '../game/Deck';

describe('deck tests', () => {
  describe('deck properties', () => {
    it('should have suits', () => {
      let deck = new Deck();
      expect(deck.suits.clubs).not.toBe(null);
      expect(deck.suits.diamonds).not.toBe(null);
      expect(deck.suits.hearts).not.toBe(null);
      expect(deck.suits.spades).not.toBe(null);
    });
  
    it('should have cards', () => {
      let deck = new Deck();
      expect(deck.cards.length).toBe(52);
    });
  });

  describe('deck methods', () => {
    it('should shuffle', () => {
      let deck = new Deck();
      let unshuffled = JSON.stringify(deck.cards);
      let shuffled = JSON.stringify(deck.shuffle());
      expect(unshuffled).not.toBe(shuffled);
    });
  
    it('should shuffle multiple times', () => {
      let deck = new Deck();
      let unshuffled = JSON.stringify(deck.cards);
      let shuffled = JSON.stringify(deck.shuffle(7));
      expect(unshuffled).not.toBe(shuffled);
    });
  
    it('should draw', () => {
      let card;
      let deck = new Deck();
      deck.shuffle();
      card = deck.draw();
      expect(card.value).toBeGreaterThan(0);
    });
  });
});