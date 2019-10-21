import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

import { rate } from '../../types';
import Overlay from '../Overlay';
import Rate from '../Rate';
import List from '../List';
import Button from '../Button';

function FollowedRateList({ followedRates, removeFollowedRate }) {
  const renderList = () => (
    <List>
      {followedRates.map((followedRate, key) => (
        <Rate key={key} rate={followedRate}>
          <Button onClick={() => removeFollowedRate(followedRate.id)}>Usuń</Button>
        </Rate>
      ))}
    </List>
  );

  return <>{isEmpty(followedRates) ? <Overlay>Lista ulubionych walut jest pusta...</Overlay> : renderList()}</>;
}

FollowedRateList.propTypes = {
  followedRates: PropTypes.arrayOf(rate).isRequired,
  removeFollowedRate: PropTypes.func.isRequired
};

export default FollowedRateList;
