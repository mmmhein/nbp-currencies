import { connect } from 'react-redux';

import { removeAllFollowedRates } from '../../actions/favoriteRatesActions';
import RemoveAllButton from './RemoveAllButton';

function mapDispatchToProps(dispatch) {
  return {
    removeAllFollowedRates: () => dispatch(removeAllFollowedRates())
  };
}

export default connect(
  null,
  mapDispatchToProps
)(RemoveAllButton);
