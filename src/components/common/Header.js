import React from 'react';
import { useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { logoutAction } from '../../store/actions';

function Header({ history }) {
  console.log('history at header :', history);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction(history));
  };
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">Star Wars</Typography>
        <Grid>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
