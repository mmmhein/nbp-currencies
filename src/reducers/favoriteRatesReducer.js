import { FAVORITE_RATES_ADD, FAVORITE_RATES_REMOVE, FAVORITE_RATES_REMOVE_ALL } from '../constants/actionTypes';

const initialState = {
  items: []
};

function favoriteRatesReducer(state = initialState, action) {
  const { items } = state;
  const { item } = action;

  switch (action.type) {
    case FAVORITE_RATES_ADD:
      return {
        ...state,
        items: [...items.filter(({ id }) => id !== item.id), item]
      };
    case FAVORITE_RATES_REMOVE:
      return {
        ...state,
        items: items.filter(({ id }) => id !== action.Id)
      };
    case FAVORITE_RATES_REMOVE_ALL:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
}

export default favoriteRatesReducer;
