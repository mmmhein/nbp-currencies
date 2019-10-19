import styled from 'styled-components';
import {
  colorTurquoise,
  colorWhite,
  colorYellow,
  fontWeightBold,
  borderWidthXThick,
  fontMedium,
  colorDarkGrey
} from '../../styles/designTokens';

const Button = styled.button`
  background: ${({ grey }) => (grey ? colorDarkGrey : colorTurquoise)};
  border: 0;
  color: ${colorWhite};
  display: block;
  font-size: ${fontMedium};
  font-weight: ${fontWeightBold};
  padding: 1.2rem;
  text-align: center;
  text-decoration: none;
  width: 100%;
  max-width: 96rem;
  margin: 0 auto;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:focus {
    outline: ${borderWidthXThick} solid ${colorYellow};
    outline-offset: 0;
  }
`;

export default Button;
