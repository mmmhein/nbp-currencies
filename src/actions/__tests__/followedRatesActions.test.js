import { addFollowedRate, removeFollowedRate, removeAllFollowedRates } from '../followedRatesActions';
import { FOLLOWED_RATES_ADD, FOLLOWED_RATES_REMOVE, FOLLOWED_RATES_REMOVE_ALL } from '../../constants/actionTypes';

describe('ACTIONS - FollowedRates actions', () => {
  it('creates an action to add following rate', () => {
    const item = {
      id: 0,
      currency: 'euro',
      code: 'EURO',
      mid: 4
    };

    const expectedAction = {
      type: FOLLOWED_RATES_ADD,
      item
    };

    expect(addFollowedRate(item)).toEqual(expectedAction);
  });

  it('creates an action to remove followed rate', () => {
    const id = 0;
    const expectedAction = {
      type: FOLLOWED_RATES_REMOVE,
      id
    };

    expect(removeFollowedRate(id)).toEqual(expectedAction);
  });

  it('creates an action to remove all followed rates', () => {
    const expectedAction = {
      type: FOLLOWED_RATES_REMOVE_ALL
    };

    expect(removeAllFollowedRates()).toEqual(expectedAction);
  });
});
