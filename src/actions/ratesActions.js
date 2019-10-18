import { FETCH_RATES_PENDING, FETCH_RATES_SUCCESS, FETCH_RATES_ERROR } from '../constants/actionTypes';

export function fetchRatesPending() {
  return {
    type: FETCH_RATES_PENDING
  };
}

export function fetchRatesSuccess(rates) {
  return {
    type: FETCH_RATES_SUCCESS,
    rates
  };
}

export function fetchRatesError(error) {
  return {
    type: FETCH_RATES_ERROR,
    error
  };
}
