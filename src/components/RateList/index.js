import { connect } from 'react-redux';

import { addFollowedRate } from '../../actions/favoriteRatesActions';
import fetchRates from '../../services/rates';
import RateItemsList from './RateList';

function mapStateToProps(state) {
  const { pending, items } = state.rates;

  return {
    rates: items,
    pending
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFollowedRate: item => dispatch(addFollowedRate(item)),
    fetchRates: () => dispatch(fetchRates())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateItemsList);
