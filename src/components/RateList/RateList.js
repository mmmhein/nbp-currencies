import React from 'react';
import PropTypes from 'prop-types';

import { rate } from '../../types';
import Rate from '../Rate';
import FollowButton from '../FollowButton';
import List from '../List';

function RateList({ rates }) {
  return (
    <List>
      {rates.map((rate, id) => (
        <Rate key={id} controlsComponent={FollowButton} rate={{ ...rate, id }} />
      ))}
    </List>
  );
}

RateList.propTypes = {
  rates: PropTypes.arrayOf(rate)
};

export default RateList;
