'use strict';

import React from 'react-native';
import {connect} from 'react-redux';
import Counter from './counter';
import {increment, decrement} from '../actions/actions';

var mapStateToProps = state => {
  return {
    number: state.number
  };
};

var mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;

