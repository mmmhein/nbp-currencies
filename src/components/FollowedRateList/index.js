import { connect } from 'react-redux';

import { removeFollowedRate } from '../../actions/favoriteRatesActions';
import FollowedRateList from './FollowedRateList';

function mapDispatchToProps(dispatch) {
  return {
    removeFollowedRate: id => dispatch(removeFollowedRate(id))
  };
}

function mapStateToProps(state) {
  return {
    followedRates: state.followedRates.items
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowedRateList);
