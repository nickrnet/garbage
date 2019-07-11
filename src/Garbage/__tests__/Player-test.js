/**
 * @format
 */

import Player from '../Player';

describe('player tests', () => {
  it('should have a name', () => {
    let player = new Player({name: 'Neo'});
    expect(player.name).toBe('Neo');
  });
  
  it('ignores invalid name', () => {
    expect(() => {
      let player = new Player();
    }).toThrow();
  });

  it('should have slots', () => {
    let player = new Player({name: 'Neo'});
    expect(player.slots.length).toBe(0);
  });

  it('should have face down cards', () => {
    let player = new Player({name: 'Neo'});
    expect(player.faceDownCards.length).toBe(0);
  });

  it('should have face up cards', () => {
    let player = new Player({name: 'Neo'});
    expect(player.faceUpCards.length).toBe(0);
  });
});