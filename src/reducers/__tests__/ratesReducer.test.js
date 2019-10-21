import reducer, { initialState } from '../ratesReducer';
import { FETCH_RATES_PENDING, FETCH_RATES_SUCCESS, FETCH_RATES_ERROR } from '../../constants/actionTypes';

describe('REDUCER - rates reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('handles action FETCH_RATES_PENDING', () => {
    const action = {
      type: FETCH_RATES_PENDING
    };

    const expectedState = {
      pending: true,
      items: [],
      error: null
    };

    Object.freeze(initialState);
    Object.freeze(action);

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('handles action FETCH_RATES_SUCCESS', () => {
    const action = {
      type: FETCH_RATES_SUCCESS,
      rates: [
        {
          currency: 'dolar',
          code: 'DOLAR',
          mid: 4
        }
      ]
    };

    const currentState = {
      pending: true,
      items: [],
      error: null
    };

    const expectedState = {
      pending: false,
      items: [
        {
          currency: 'dolar',
          code: 'DOLAR',
          mid: 4
        }
      ],
      error: null
    };

    Object.freeze(currentState);
    Object.freeze(action);

    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('handles action FETCH_RATES_ERROR', () => {
    const action = {
      type: FETCH_RATES_ERROR,
      error: 'error'
    };

    const expectedState = {
      pending: false,
      items: [],
      error: 'error'
    };

    Object.freeze(initialState);
    Object.freeze(action);

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
