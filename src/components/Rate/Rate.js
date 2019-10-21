import React from 'react';
import PropTypes from 'prop-types';

import { rate } from '../../types';
import Text from './Text';
import Wrapper from './Wrapper';

function Rate({ rate, children }) {
  const { currency, code, mid } = rate;

  return (
    <Wrapper data-testid="rate">
      <Text>{currency}</Text>
      <Text>{code}</Text>
      <Text bold>{mid}</Text>
      {children}
    </Wrapper>
  );
}

Rate.propTypes = {
  rate: rate.isRequired,
  children: PropTypes.node
};

export default Rate;
