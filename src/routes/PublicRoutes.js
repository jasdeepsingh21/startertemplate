import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../views/loginView';
import NotFound from '../components/common/PageNotFound';

const PublicRoutes = ({ history }) => (
  <Switch history={history}>
    <Route exact path="/" component={Login} />
    <Route component={NotFound} />
  </Switch>
);

export default PublicRoutes;
