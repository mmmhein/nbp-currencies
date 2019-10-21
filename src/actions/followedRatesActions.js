import { FOLLOWED_RATES_ADD, FOLLOWED_RATES_REMOVE, FOLLOWED_RATES_REMOVE_ALL } from '../constants/actionTypes';

export function addFollowedRate(item) {
  return {
    type: FOLLOWED_RATES_ADD,
    item
  };
}

export function removeFollowedRate(id) {
  return {
    type: FOLLOWED_RATES_REMOVE,
    id
  };
}

export function removeAllFollowedRates() {
  return {
    type: FOLLOWED_RATES_REMOVE_ALL
  };
}
