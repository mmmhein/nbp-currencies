import React from 'react';
import PropTypes from 'prop-types';

import { rate } from '../../types';

function RateItem({ id, rate, addFavoriteRate }) {
  const handleOnClick = () => {
    const favoriteRate = {
      id,
      ...rate
    };
    addFavoriteRate(favoriteRate);
  };

  const { currency, code, mid } = rate;

  return (
    <li>
      <section>
        <span>{currency}</span>
        <span>{code}</span>
        <span>{mid}</span>
        <button onClick={handleOnClick}>Favorite</button>
      </section>
    </li>
  );
}

RateItem.propTypes = {
  id: PropTypes.number.isRequired,
  rate: rate.isRequired,
  addFavoriteRate: PropTypes.func.isRequired
};

export default RateItem;
