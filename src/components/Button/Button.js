import styled from 'styled-components';

import media from '../../styles/media';
import {
  colorTurquoise,
  colorWhite,
  colorYellow,
  fontWeightBold,
  borderWidthXThick,
  fontMedium,
  colorDarkGrey,
  fontSmall
} from '../../styles/designTokens';

const Button = styled.button`
  background: ${({ grey }) => (grey ? colorDarkGrey : colorTurquoise)};
  border: 0;
  color: ${colorWhite};
  display: block;
  font-size: ${fontMedium};
  font-weight: ${fontWeightBold};
  padding: 0.8rem;
  text-align: center;
  text-decoration: none;
  width: 100%;
  max-width: 15rem;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:focus {
    outline: ${borderWidthXThick} solid ${colorYellow};
    outline-offset: 0;
  }

  ${media.phone`
    font-size: ${fontSmall}
    max-width: 9rem;
  `};
`;

export default Button;
