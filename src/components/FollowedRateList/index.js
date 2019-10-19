import { connect } from 'react-redux';

import FollowedRateList from './FollowedRateList';

function mapStateToProps(state) {
  return {
    followedRates: state.followedRates.items
  };
}

export default connect(mapStateToProps)(FollowedRateList);
