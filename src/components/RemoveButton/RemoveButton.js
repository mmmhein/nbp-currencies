import React from 'react';

import { rate } from '../../types';
import Button from '../Button';

function RemoveButton({ rate, removeFollowedRate }) {
  const handleOnClick = () => removeFollowedRate(rate.id);

  return <Button onClick={handleOnClick}>Remove</Button>;
}

RemoveButton.propTypes = {
  rate: rate.isRequired
};

export default RemoveButton;
