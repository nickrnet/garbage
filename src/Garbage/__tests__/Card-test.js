/**
 * @format
 */

import Card from '../Card.js';

describe('card tests', () => {
  it('has a valid value', () => {
    let card = new Card({value: 2});
    expect(card.value).toBe(2);
  });
  
  it('ignores invalid values', () => {
    expect(() => {
      let card = new Card({value: 99});
    }).toThrow();
    expect(() => {
      let card = new Card();
    }).toThrow();
  });
  
  it('should have a name when specified', () => {
    let card = new Card({name: '2', value: 2});
    expect(card.name).toBe('2');
  });
  
  it('should have a name if not specified', () => {
    let card = new Card({value: 1});
    expect(card.name).toBe('Ace');
  });

  it('should have a suit', () => {
    let card = new Card({suit: 'spades', value: 1});
    expect(card.suit).toBe('spades');
  });

  it('should flip', () => {
    let card = new Card({value: 10});
    card.flip();
    expect(card.faceUp).toBe(true);
  });
});