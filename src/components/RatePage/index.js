import { connect } from 'react-redux';

import fetchRates from '../../services/rates';
import RatePage from './RatePage';

function mapStateToProps(state) {
  const { pending, error } = state.rates;

  return {
    pending,
    error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRates: () => dispatch(fetchRates())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatePage);
