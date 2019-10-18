import { connect } from 'react-redux';

import RateItemsList from './RateItemsList';

function mapStateToProps(state) {
  return {
    rates: state.rates.items
  };
}

export default connect(mapStateToProps)(RateItemsList);
