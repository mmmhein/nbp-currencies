import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fontMedium, fontWeightNormal, fontWeightBold, colorBlack } from '../../styles/designTokens';

const Text = styled.p`
  font-size: ${fontMedium};
  width: 100%;
  font-weight: ${({ bold }) => (bold ? fontWeightBold : fontWeightNormal)};
  line-height: 1.4;
  margin: 0;
  color: ${colorBlack};
`;

Text.propTypes = {
  bold: PropTypes.bool
};

export default Text;
