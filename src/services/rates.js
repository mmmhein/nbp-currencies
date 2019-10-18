import { fetchRatesPending, fetchRatesSuccess, fetchRatesError } from '../actions/ratesActions';

const BASE_URL = 'http://api.nbp.pl/api/exchangerates/tables';

function fetchRates() {
  return dispatch => {
    dispatch(fetchRatesPending());
    fetch(`${BASE_URL}/A?format=json`)
      .then(resp => resp.json())
      .then(([response]) => dispatch(fetchRatesSuccess(response.rates)))
      .catch(error => dispatch(fetchRatesError(error)));
  };
}

export default fetchRates;
