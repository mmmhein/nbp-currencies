import React from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash.isempty';

import { isLandingPage } from '../../utils';
import RemoveAllButton from '../RemoveAllButton';
import Layout from './Layout';
import Content from './Content';
import StyledLink from './StyledLink';
import Wrapper from './Wrapper';

function Header({ followedRates, location }) {
  return (
    <Layout>
      <Content as="div">
        <Wrapper>
          <StyledLink bold as={Link} to="/">
            Ulubione
          </StyledLink>
          <StyledLink bold as={Link} to="/rates">
            Waluty
          </StyledLink>
        </Wrapper>
        {!isEmpty(followedRates) && isLandingPage(location.pathname) && <RemoveAllButton />}
      </Content>
    </Layout>
  );
}

export default Header;
