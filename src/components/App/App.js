import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import { ROOT_PATH, RATES_PATH } from '../../constants/routes';
import Headers from '../Header';
import LandingPage from '../LandingPage';
import RatePage from '../RatePage';

function App() {
  return (
    <>
      <Headers />
      <main>
        <Switch>
          <Route exact path={ROOT_PATH} component={LandingPage} />
          <Route exact path={`/${RATES_PATH}`} component={RatePage} />
        </Switch>
      </main>
    </>
  );
}

export default withRouter(App);
