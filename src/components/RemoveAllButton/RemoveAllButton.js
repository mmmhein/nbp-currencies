import React from 'react';

import Button from '../Button';

function RemoveAllButton({ removeAllFollowedRates }) {
  const handleOnClick = () => removeAllFollowedRates();

  return (
    <Button grey onClick={handleOnClick}>
      Remove All
    </Button>
  );
}

export default RemoveAllButton;
