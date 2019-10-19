import { connect } from 'react-redux';

import Header from './Header';

function mapStateToProps(state) {
  return {
    followedRates: state.followedRates.items
  };
}

export default connect(mapStateToProps)(Header);
