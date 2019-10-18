import { connect } from 'react-redux';

import { addFavoriteRate } from '../../actions/favoriteRatesActions';
import RateItem from './RateItem';

function mapDispatchToProps(dispatch) {
  return {
    addFavoriteRate: item => dispatch(addFavoriteRate(item))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(RateItem);
