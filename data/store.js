'use strict';

import {createStore} from 'redux';
import counter from '../reducers/root';

export default createStore(counter);