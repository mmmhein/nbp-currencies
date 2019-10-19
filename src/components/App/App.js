import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import { ROOT_PATH, RATES_PATH } from '../../constants/routes';
import Headers from '../Header';
import LandingPage from '../LandingPage';
import RatePage from '../RatePage';
import Main from './Main';

function App() {
  return (
    <>
      <Headers />
      <Main>
        <Switch>
          <Route exact path={ROOT_PATH} component={LandingPage} />
          <Route exact path={`/${RATES_PATH}`} component={RatePage} />
        </Switch>
      </Main>
    </>
  );
}

export default withRouter(App);
