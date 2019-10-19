import React from 'react';

import Rate from '../Rate';
import RemoveButton from '../RemoveButton';
import List from '../List';

function FollowedRateList({ followedRates }) {
  return (
    <List>
      {followedRates.map((followedRate, key) => (
        <Rate key={key} controlsComponent={RemoveButton} rate={followedRate} />
      ))}
    </List>
  );
}

export default FollowedRateList;
