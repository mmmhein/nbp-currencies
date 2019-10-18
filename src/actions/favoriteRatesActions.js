import { FAVORITE_RATES_ADD, FAVORITE_RATES_REMOVE, FAVORITE_RATES_REMOVE_ALL } from '../constants/actionTypes';

export function addFavoriteRate(item) {
  return {
    type: FAVORITE_RATES_ADD,
    item
  };
}

export function removeItemFavoriteRate(Id) {
  return {
    type: FAVORITE_RATES_REMOVE,
    Id
  };
}

export function removeAllFavoriteRates() {
  return {
    type: FAVORITE_RATES_REMOVE_ALL
  };
}
