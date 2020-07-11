import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../components/common/Header';
import Dashboard from '../components/dashboard';

function PrivateRoutes({ history }) {
  console.log('histiry at oric :', history);
  return (
    <Grid container style={{ margin: 0, padding: 0 }}>
      <Grid item md={12}>
        <Header history={history} />
      </Grid>
      <Grid item md={12} className="main-container">
        <Dashboard />
      </Grid>
    </Grid>
  );
}

export default PrivateRoutes;
