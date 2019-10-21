import styled from 'styled-components';

import media from '../../styles/media';
import { fontMedium, fontWeightNormal, fontWeightBold, colorBlack, fontSmall } from '../../styles/designTokens';

const Text = styled.p`
  font-size: ${fontMedium};
  line-height: 1.4;
  font-weight: ${({ bold }) => (bold ? fontWeightBold : fontWeightNormal)};
  margin: 0;
  color: ${colorBlack};

  ${media.phone`
    font-size: ${fontSmall};
  `};
`;

export default Text;

/*import styled from 'styled-components';

import media from '../../styles/media';
import { fontMedium, fontWeightNormal, fontWeightBold, colorBlack, fontSmall } from '../../styles/designTokens';

const Text = styled.p`
  font-size: ${fontMedium};
  font-weight: ${({ bold }) => (bold ? fontWeightBold : fontWeightNormal)};
  line-height: 1.4;
  margin: 0;
  color: ${colorBlack};

  ${media.phone`
    font-size: ${fontSmall}
  `};
`;

export default Text;
*/
