/**
 * @flow
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Game from './game/Game.js';

export default function Gameboard (props) {
    const [game, setGame] = useState(props.game || new Game());
    if (!props.game) {
        game.generatePlayers();
        game.dealCards();
    }
    const [players, setPlayers] = useState(game.players);

    const renderPlayer = (spot) => {
        return (
            <View style={{flex: 1, backgroundColor: 'steelblue'}}>
                <Text>{players[spot].name}</Text>
                <Text>{players[spot].slots}</Text>
                { players[spot].card ? <Text>Current card: { players[spot].card.name } of { players[spot].card.suit }</Text>
                : <Text></Text>}
                <TouchableOpacity
                    onPress={ playerDiscard }
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#DDDDDD',
                        padding: 10
                    }}
                >
                    <Text>Discard</Text>
                </TouchableOpacity>
            </View>
        );
    }

    useEffect(() => {
        setGame(game);
        setPlayers(players);
    });

    const playerDrawFromDeck = () => {
        if (game.deck.cards && game.deck.cards.length) {
            players[3].drawFromDeck(game.deck);
            if (players[3].card) {
                alert(`${players[3].card.name} of ${players[3].card.suit}`);
            }
        } else {
            alert(`Out of cards to draw.`);
        }
    }

    const playerDiscard = () => {
        if (players[3].card) {
            alert(`Discarding ${players[3].card.name} of ${players[3].card.suit}.`);
            players[3].discardCard(game.discard);
        }
    }

    const playerDrawFromDiscard = () => {
        if (game.discard.cards && game.discard.cards.length) {
            players[3].drawFromDiscard(game.discard);
            if (players[3].card) {
                alert(`${players[3].card.name} of ${players[3].card.suit}`);
            }
        } else {
            alert(`Out of cards to draw.`);
        }
    }

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            minWidth: '100%',
            minHeight: '100%'
        }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                borderTopWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderBottomWidth: 1
            }}>
                { renderPlayer(0) }
            </View>
                
            <View style={{
                flex: 2,
                flexDirection: 'row',
                borderTopWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderBottomWidth: 1
            }}>
                <View style={{
                    flex: 3,
                    flexDirection: 'row',
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderBottomWidth: 1
                }}>
                    { renderPlayer(1) }
                </View>

                <View style={{
                    flex: 2,
                    flexDirection: 'column',
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderBottomWidth: 1
                }}>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'skyblue'
                    }}>
                        <Text>Deck</Text>
                        { game.deck.cards && game.deck.cards.length ? <TouchableOpacity style={{
                            alignItems: 'center',
                            backgroundColor: '#DDDDDD',
                            padding: 10
                        }} onPress={ playerDrawFromDeck }>
                            <Text>{ game.deck.cards.length }</Text>
                        </TouchableOpacity>
                        : <Text></Text>}
                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'skyblue'
                    }}>
                        <Text>Discard</Text>
                        { game.discard.cards && game.discard.cards.length ? <TouchableOpacity style={{
                            alignItems: 'center',
                            backgroundColor: '#DDDDDD',
                            padding: 10
                        }} onPress={ playerDrawFromDiscard }>
                            <Text>{ game.discard.cards[game.discard.cards.length-1] }</Text>
                        </TouchableOpacity>
                        : <Text></Text> }
                    </View>
                </View>

                <View style={{
                    flex: 3,
                    flexDirection: 'row',
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderBottomWidth: 1
                }}>
                    { renderPlayer(2) }
                </View>
            </View>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                borderTopWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderBottomWidth: 1
            }}>
                { renderPlayer(3) }
            </View>
        </View>
    );
};
