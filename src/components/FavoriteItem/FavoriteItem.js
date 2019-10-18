import React from 'react';
import PropTypes from 'prop-types';

function FavoriteItem({ favoriteRate, removeItemFavoriteRate }) {
  const { id, currency, code, mid } = favoriteRate;

  const handleOnClick = () => removeItemFavoriteRate(id);

  return (
    <li>
      <section>
        <span>{currency}</span>
        <span>{code}</span>
        <span>{mid}</span>
        <button onClick={handleOnClick}>Remove</button>
      </section>
    </li>
  );
}

FavoriteItem.propTypes = {
  removeItemFavoriteRate: PropTypes.func.isRequired
};

export default FavoriteItem;
