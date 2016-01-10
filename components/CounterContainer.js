'use strict';

import React from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Counter from './counter';
import * as actions from '../actions/actions';

var mapStateToProps = state => {
  return {
    number: state.number
  };
};

var mapDispatchToProps = dispatch => {
  return { ...bindActionCreators(actions, dispatch) };
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;

