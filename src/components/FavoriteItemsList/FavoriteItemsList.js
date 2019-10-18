import React from 'react';

import FavoriteItem from '../FavoriteItem';

function FavoriteItemsList({ favoriteRates }) {
  return (
    <ul>
      {favoriteRates.map((favoriteRate, key) => (
        <FavoriteItem key={key} favoriteRate={favoriteRate} />
      ))}
    </ul>
  );
}

export default FavoriteItemsList;
