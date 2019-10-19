import styled from 'styled-components';

import { colorLightGrey, borderWidthThin, spacingMedium } from '../../styles/designTokens';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  border-bottom: ${borderWidthThin} solid ${colorLightGrey};
  padding: ${spacingMedium} 0;
`;

export default Wrapper;
