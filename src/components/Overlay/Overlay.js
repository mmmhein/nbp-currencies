import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Wrapper from './Wrapper';

function Overlay({ children }) {
  return (
    <Wrapper data-testid="overlay">
      <Text bold>{children}</Text>
    </Wrapper>
  );
}

Overlay.propTypes = {
  children: PropTypes.node
};

export default Overlay;
