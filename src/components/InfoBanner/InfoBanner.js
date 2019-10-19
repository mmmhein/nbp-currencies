import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Content from '../Content';

function InfoBanner({ grey, children }) {
  return (
    <Wrapper grey={grey}>
      <Content>{children}</Content>
    </Wrapper>
  );
}

InfoBanner.propTypes = {
  red: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default InfoBanner;
