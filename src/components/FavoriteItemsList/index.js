import { connect } from 'react-redux';

import FavoriteItemsList from './FavoriteItemsList';

function mapStateToProps(state) {
  return {
    favoriteRates: state.favoriteRates.items
  };
}

export default connect(mapStateToProps)(FavoriteItemsList);
