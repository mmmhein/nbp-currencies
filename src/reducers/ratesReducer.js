import { FETCH_RATES_PENDING, FETCH_RATES_SUCCESS, FETCH_RATES_ERROR } from '../constants/actionTypes';

const initialState = {
  pending: false,
  items: [],
  error: null
};

function ratesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RATES_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_RATES_SUCCESS:
      return {
        ...state,
        pending: false,
        items: action.rates
      };
    case FETCH_RATES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default ratesReducer;
