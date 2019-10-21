import reducer, { initialState } from '../followedRatesReducer';
import { FOLLOWED_RATES_ADD, FOLLOWED_RATES_REMOVE, FOLLOWED_RATES_REMOVE_ALL } from '../../constants/actionTypes';

describe('REDUCER - followedRates reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('handles action FOLLOWED_RATES_ADD', () => {
    const currentState = {
      items: [
        {
          id: 0,
          currency: 'euro',
          code: 'EURO',
          mid: 4
        }
      ]
    };

    const action = {
      type: FOLLOWED_RATES_ADD,
      item: {
        id: 1,
        currency: 'dolar',
        code: 'DOLAR',
        mid: 4
      }
    };

    const expectedState = {
      items: [
        {
          id: 0,
          currency: 'euro',
          code: 'EURO',
          mid: 4
        },
        {
          id: 1,
          currency: 'dolar',
          code: 'DOLAR',
          mid: 4
        }
      ]
    };

    Object.freeze(currentState);
    Object.freeze(action);

    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('handles action FOLLOWED_RATES_REMOVE', () => {
    const action = {
      type: FOLLOWED_RATES_REMOVE,
      id: 0
    };

    const currentState = {
      items: [
        {
          id: 0,
          currency: 'euro',
          code: 'EURO',
          mid: 4
        }
      ]
    };

    const expectedState = {
      items: []
    };

    Object.freeze(currentState);
    Object.freeze(action);

    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('handles action FOLLOWED_RATES_REMOVE_ALL', () => {
    const action = {
      type: FOLLOWED_RATES_REMOVE_ALL
    };

    const expectedState = {
      items: []
    };

    const currentState = {
      items: [
        {
          id: 2,
          currency: 'euro',
          code: 'EURO',
          mid: 4
        }
      ]
    };

    Object.freeze(currentState);
    Object.freeze(action);

    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});
