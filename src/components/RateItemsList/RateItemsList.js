import React from 'react';
import PropTypes from 'prop-types';

import { rate } from '../../types';
import RateItem from '../RateItem';

function RateItemsList({ rates }) {
  return (
    <ul>
      {rates.map((rate, key) => (
        <RateItem key={key} rate={rate} id={key} />
      ))}
    </ul>
  );
}

RateItemsList.propTypes = {
  rates: PropTypes.arrayOf(rate)
};

export default RateItemsList;
