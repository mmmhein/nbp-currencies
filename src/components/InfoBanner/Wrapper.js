import styled from 'styled-components';

import { colorTurquoise, colorWhite, fontMedium, spacingSmall, colorDarkGrey } from '../../styles/designTokens';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: ${spacingSmall} 0;
  background-color: ${({ grey }) => (grey ? colorDarkGrey : colorTurquoise)};
  color: ${colorWhite};
  font-size: ${fontMedium};
  text-align: center;
`;

export default Wrapper;
