import React from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash.isempty';
import PropTypes from 'prop-types';

import { rate } from '../../types';
import { isLandingPage } from '../../utils';
import RemoveAllButton from '../RemoveAllButton';
import Layout from './Layout';
import Content from './Content';
import StyledLink from './StyledLink';
import Navigation from './Navigation';

function Header({ followedRates, location }) {
  return (
    <Layout>
      <Content as="div">
        <Navigation>
          <StyledLink as={Link} to="/">
            Ulubione
          </StyledLink>
          <StyledLink as={Link} to="/rates">
            Waluty
          </StyledLink>
        </Navigation>
        {!isEmpty(followedRates) && isLandingPage(location.pathname) && <RemoveAllButton />}
      </Content>
    </Layout>
  );
}

Header.propTypes = {
  followedRates: PropTypes.arrayOf(rate).isRequired,
  location: PropTypes.object.isRequired
};

export default Header;
