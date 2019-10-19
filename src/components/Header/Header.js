import React from 'react';
import { Link } from 'react-router-dom';

import RemoveAllButton from '../RemoveAllButton';
import Layout from './Layout';
import Content from './Content';
import StyledLink from './StyledLink';
import Wrapper from './Wrapper';

function Header({ followedRates }) {
  return (
    <Layout>
      <Content as="div">
        <Wrapper>
          <StyledLink bold as={Link} to="/">
            Favourite
          </StyledLink>
          <StyledLink bold as={Link} to="/rates">
            Rates
          </StyledLink>
        </Wrapper>
        {followedRates && <RemoveAllButton />}
      </Content>
    </Layout>
  );
}

export default Header;
