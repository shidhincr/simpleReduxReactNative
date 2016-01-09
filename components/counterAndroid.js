import React from 'react-native';
import Button from 'react-native-button';
import {increment, decrement} from '../actions/actions';

let {
  Text, View, StyleSheet
  }  = React;

const Counter = class Counter extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.message}>
          Number is = {this.props.number}
        </Text>
        <Button
          style={styles.button}
          onPress={increment}>
          +
        </Button>
        <Button style={styles.button}
                onPress={decrement}>
          -
        </Button>
      </View>
    );
  }
};

let styles = StyleSheet.create({
  message: {
    fontSize: 36,
    color: '#000'
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: 5,
    margin: 10,
    width: 100
  }
});

export default Counter;