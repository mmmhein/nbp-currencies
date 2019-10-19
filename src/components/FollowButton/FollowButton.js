import React from 'react';

import { rate } from '../../types';
import Button from '../Button';

function FollowButton({ rate, addFollowedRate }) {
  const handleOnClick = () => addFollowedRate(rate);

  return (
    <Button grey onClick={handleOnClick}>
      Follow
    </Button>
  );
}

FollowButton.propTypes = {
  rate: rate.isRequired
};

export default FollowButton;
