import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../views/loginView';
import NotFound from '../components/common/PageNotFound';

const PublicRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default PublicRoutes;
