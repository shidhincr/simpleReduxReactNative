/**
 * Simple React Native App using Redux
 */
'use strict';

import React from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import CounterContainer from './components/counterContainer';
import Counter from './components/counter';
import store from './data/store';

let {
  AppRegistry,
  StyleSheet,
  View
  } = React;

class ReactNativeRedux extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <View style={styles.container}>
            <CounterContainer></CounterContainer>
          </View>
      </Provider>
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
