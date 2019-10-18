import { connect } from 'react-redux';

import { removeItemFavoriteRate } from '../../actions/favoriteRatesActions';
import FavoriteItem from './FavoriteItem';

function mapDispatchToProps(dispatch) {
  return {
    removeItemFavoriteRate: id => dispatch(removeItemFavoriteRate(id))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(FavoriteItem);
