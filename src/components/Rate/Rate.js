import React from 'react';
import PropTypes from 'prop-types';

import { rate } from '../../types';
import Text from './Text';
import Wrapper from './Wrapper';

function Rate({ controlsComponent: Controls, rate }) {
  const { currency, code, mid } = rate;

  return (
    <Wrapper>
      <Text>{currency}</Text>
      <Text>{code}</Text>
      <Text bold>{mid}</Text>
      <Controls rate={rate} />
    </Wrapper>
  );
}

Rate.propTypes = {
  rate: rate.isRequired,
  /** Component that handle Rate state manipulation */
  controlsComponent: PropTypes.object
};

export default Rate;
