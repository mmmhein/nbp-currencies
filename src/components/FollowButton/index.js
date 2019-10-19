import { connect } from 'react-redux';

import { addFollowedRate } from '../../actions/favoriteRatesActions';
import FollowButton from './FollowButton';

function mapDispatchToProps(dispatch) {
  return {
    addFollowedRate: item => dispatch(addFollowedRate(item))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(FollowButton);
