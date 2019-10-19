import styled from 'styled-components';

import Text from '../Text';
import { spacingMedium, borderWidthThin, colorLightGrey } from '../../styles/designTokens';

const StyledLink = styled(Text)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  padding-right: ${spacingMedium};
  border-right: ${borderWidthThin} solid ${colorLightGrey};
`;

export default StyledLink;
