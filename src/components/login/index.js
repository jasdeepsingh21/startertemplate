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
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../../logo.png';
import { loginAction } from '../../store/actions';

const Login = () => {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) => {
    if (e.target.name === 'userName') {
      setUser(e.target.value);
    } else {
      setPass(e.target.value);
    }
  };
  const handleSubmit = () => {
    console.log('history :', history);
    dispatch(
      loginAction({ userName: user, password: pass, history }),
    );
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      {/* <form onSubmit={handleSubmit}> */}
      <Grid item md={12}>
        <Typography variant="h3">STAR WARS APP</Typography>
      </Grid>
      <Card>
        <CardContent>
          <img src={logo} alt="logo" className="logo" />
          <Typography variant="h5">Sign In</Typography>
          <Grid>
            <Grid item md={12}>
              <TextField
                name="userName"
                error={false}
                value={user}
                onChange={handleChange}
                id="userName"
                label="User Name"
                // helperText='Incorrect entry.'
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                name="password"
                error={false}
                value={pass}
                onChange={handleChange}
                type="password"
                id="pass"
                label="Password"
                // helperText={error && 'Incorrect entry.'}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </CardActions>
      </Card>
      {/* </form> */}
    </Grid>
  );
};
export default Login;
