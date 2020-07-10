import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const authenticate = () => {
  const user = '';
  if (user !== '') {
    return <Redirect to="/app/dashboard" />;
  }
  return <PublicRoutes />;
};

function Routes({ history }) {
  console.log('in routes');
  return (
    <Router history={history}>
      <Switch>
        <Route path="/app" component={PrivateRoutes} />
        <Route path="/" component={authenticate} />
      </Switch>
    </Router>
  );
}

export default Routes;
