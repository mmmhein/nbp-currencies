import { connect } from 'react-redux';

import RateItemsList from './RateList';

function mapStateToProps(state) {
  return {
    rates: state.rates.items
  };
}

export default connect(mapStateToProps)(RateItemsList);
