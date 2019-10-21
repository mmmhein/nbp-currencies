import { FOLLOWED_RATES_ADD, FOLLOWED_RATES_REMOVE, FOLLOWED_RATES_REMOVE_ALL } from '../constants/actionTypes';

export const initialState = {
  items: []
};

function followedRatesReducer(state = initialState, action) {
  const { items } = state;
  const { item } = action;
  switch (action.type) {
    case FOLLOWED_RATES_ADD:
      return {
        ...state,
        items: [...items.filter(({ id }) => id !== item.id), item]
      };
    case FOLLOWED_RATES_REMOVE:
      return {
        ...state,
        items: items.filter(({ id }) => id !== action.id)
      };
    case FOLLOWED_RATES_REMOVE_ALL:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
}

export default followedRatesReducer;
