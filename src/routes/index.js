import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const authenticate = ({ history }) => {
  console.log('in auth enticate', history);
  const user = window.localStorage.getItem('user');
  // console.log('in auth user', user);
  if (user) {
    return <Redirect to="/app/dashboard" />;
  }
  return <PublicRoutes history={history} />;
};

function Routes({ history }) {
  console.log('in routes', history);
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
