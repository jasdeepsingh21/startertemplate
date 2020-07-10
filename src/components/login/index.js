import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  CardActions,
  Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import logo from '../../logo.png';
import { loginAction } from '../../store/actions';

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    console.log('FORM VALUE IS :', event);
    const form = event.target;
    const data = new FormData(form);
    dispatch(loginAction(data));
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item md={12}>
        <Typography variant="h3">STAR WARS APP</Typography>
      </Grid>
      <Card>
        <CardContent>
          <img src={logo} alt="logo" className="logo" />
          <Typography variant="h5">Sign In</Typography>
          <Grid>
            <form onSubmit={handleSubmit}>
              <Grid item md={12}>
                <TextField
                  name="userName"
                  error={false}
                  id="userName"
                  label="User Name"
                  // helperText='Incorrect entry.'
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  name="password"
                  error={false}
                  type="password"
                  id="pass"
                  label="Password"
                  // helperText={error && 'Incorrect entry.'}
                />
              </Grid>
            </form>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            // onClick={handleSubmit}
          >
            Sign In
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default Login;
