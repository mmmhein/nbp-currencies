import React from 'react';

import Wrapper from './Wrapper';
import Text from '../Text';

function Overlay({ children }) {
  return (
    <Wrapper>
      <Text bold>{children}</Text>
    </Wrapper>
  );
}

export default Overlay;
