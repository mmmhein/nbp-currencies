import styled from 'styled-components';

import { spacingMedium, borderWidthThin, colorLightGrey } from '../../styles/designTokens';
import Text from '../Text';

const StyledLink = styled(Text)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 ${spacingMedium};
  border-right: ${borderWidthThin} solid ${colorLightGrey};
`;

export default StyledLink;
