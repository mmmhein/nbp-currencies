import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

function Header() {
  return (
    <Layout>
      <Link to="/">Favourite</Link>
      <Link to="/currency">Currency</Link>
    </Layout>
  );
}

export default Header;
