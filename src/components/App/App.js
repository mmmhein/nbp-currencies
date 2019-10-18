import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import { ROOT_PATH, CURRENCIES_PATH } from '../../constants/routes';
import Headers from '../Header';
import LandingPage from '../LandingPage';
import CurrenciesPage from '../CurrenciesPage';

function App() {
  return (
    <>
      <Headers />
      <main>
        <Switch>
          <Route exact path={ROOT_PATH} component={LandingPage} />
          <Route exact path={`/${CURRENCIES_PATH}`} component={CurrenciesPage} />
        </Switch>
      </main>
    </>
  );
}

export default withRouter(App);
