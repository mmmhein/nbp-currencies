import { combineReducers } from 'redux';

import rates from './ratesReducer';
import favoriteRates from './favoriteRatesReducer';

const rootReducer = combineReducers({
  rates,
  favoriteRates
});

export default rootReducer;
