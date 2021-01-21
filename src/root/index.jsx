import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';

import Weather from '../pages/Weather';

export default function Root() {
  const customHistory = createHashHistory();
  return (
    <>
      <Router history={customHistory}>
        <Switch>
          <Route path="/demo" component={Weather} />
          <Route path="/" component={Weather} />
        </Switch>
      </Router>
    </>
  );
}
