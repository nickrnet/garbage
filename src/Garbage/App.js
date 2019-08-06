/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Gameboard from './Gameboard.js';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Gameboard />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
