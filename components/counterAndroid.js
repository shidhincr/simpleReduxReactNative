import React from 'react-native';
import Button from 'react-native-button';
let {
  Text, View, StyleSheet
  }  = React;

const Counter = class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.start || 0
    };
    // Need to bind for accessing `this` inside the method
    // Known issue with React.Component class
    this._increment = this._increment.bind(this);
    this._decrement = this._decrement.bind(this);
  }

  render() {
    return (
      <View>
        <Text style={styles.message}>
          Number is = {this.state.number}
        </Text>
        <Button
          style={styles.button}
          onPress={this._increment}>
          +
        </Button>
        <Button style={styles.button}
                onPress={this._decrement}>
          -
        </Button>
      </View>
    );
  }

  _increment() {
    let {number} = this.state;
    this.setState({
      number: number + 1
    });
  }

  _decrement() {
    let {number} = this.state;
    this.setState({
      number: number - 1
    });
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