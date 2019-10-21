import React from 'react';
import PropTypes from 'prop-types';

import Content from '../Content';
import Wrapper from './Wrapper';

function InfoBanner({ grey, children }) {
  return (
    <Wrapper grey={grey}>
      <Content as="div">{children}</Content>
    </Wrapper>
  );
}

InfoBanner.propTypes = {
  red: PropTypes.bool,
  children: PropTypes.node
};

export default InfoBanner;
