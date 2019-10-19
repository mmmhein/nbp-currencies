import { combineReducers } from 'redux';

import rates from './ratesReducer';
import followedRates from './followedRatesReducer';

const rootReducer = combineReducers({
  rates,
  followedRates
});

export default rootReducer;
