'use strict';
import store from '../data/store';

export function increment() {
  store.dispatch({
    type: 'INCREMENT'
  });
}

export function decrement() {
  store.dispatch({
    type: 'DECREMENT'
  });
}
