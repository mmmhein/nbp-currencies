import { connect } from 'react-redux';

import { removeFollowedRate } from '../../actions/favoriteRatesActions';
import RemoveButton from './RemoveButton';

function mapDispatchToProps(dispatch) {
  return {
    removeFollowedRate: id => dispatch(removeFollowedRate(id))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(RemoveButton);
