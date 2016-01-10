'use strict';
import store from '../data/store';

export function increment() {
  return {
    type: 'INCREMENT'
  };
}

export function decrement() {
   return {
    type: 'DECREMENT'
  };
}
