import { fetchRatesPending, fetchRatesSuccess, fetchRatesError } from '../ratesActions';
import { FETCH_RATES_PENDING, FETCH_RATES_SUCCESS, FETCH_RATES_ERROR } from '../../constants/actionTypes';

describe('ACTIONS - FollowedRates actions', () => {
  it('creates an action to waiting when rates is fetching', () => {
    const expectedAction = {
      type: FETCH_RATES_PENDING
    };

    expect(fetchRatesPending()).toEqual(expectedAction);
  });

  it('creates an action when rates fetched success', () => {
    const expectedAction = {
      type: FETCH_RATES_SUCCESS
    };

    expect(fetchRatesSuccess()).toEqual(expectedAction);
  });

  it('creates an action when fetched rates returns error', () => {
    const expectedAction = {
      type: FETCH_RATES_ERROR
    };

    expect(fetchRatesError()).toEqual(expectedAction);
  });
});
