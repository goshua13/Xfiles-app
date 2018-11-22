/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, View } from 'react-native';
import Illuminati from './src/components/Illuminati';
import { Header } from './src/common';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText='X Files'/>
        <View style={ styles.containerStyle }>
        <Illuminati />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    marginTop: 140,
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column'
  }
}
