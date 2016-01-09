/**
 * Simple React Native App using Redux
 */
'use strict';

import React from 'react-native';
import Counter from './components/counterAndroid'
import {createStore} from 'redux';
import store from './data/store';

let {
  AppRegistry,
  StyleSheet,
  View
  } = React;

/**
 * ReactNativeRedux is a container component
 */

class ReactNativeRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(()=> {
      this.setState(store.getState());
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Counter number={this.state.number}></Counter>
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
