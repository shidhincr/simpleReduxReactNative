/**
 * Simple React Native App using Redux
 */
'use strict';

import React from 'react-native';
import Counter from './components/counterAndroid'

let {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  } = React;

class ReactNativeRedux extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter start={10}></Counter>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('reactNativeRedux', () => ReactNativeRedux);
