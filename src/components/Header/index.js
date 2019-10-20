import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './Header';

function mapStateToProps(state) {
  return {
    followedRates: state.followedRates.items
  };
}

export default withRouter(connect(mapStateToProps)(Header));
