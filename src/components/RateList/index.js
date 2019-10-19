import { connect } from 'react-redux';

import RateItemsList from './RateList';

function mapStateToProps(state) {
  return {
    rates: state.rates.items,
    pending: state.rates.pending
  };
}

export default connect(mapStateToProps)(RateItemsList);
