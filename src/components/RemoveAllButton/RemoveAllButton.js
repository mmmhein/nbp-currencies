import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

function RemoveAllButton({ removeAllFollowedRates }) {
  const handleOnClick = () => removeAllFollowedRates();

  return (
    <Button grey onClick={handleOnClick}>
      Remove All
    </Button>
  );
}

RemoveAllButton.propTypes = {
  removeAllFollowedRates: PropTypes.func.isRequired
};

export default RemoveAllButton;
