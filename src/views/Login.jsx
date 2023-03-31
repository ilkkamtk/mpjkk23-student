import {Button, Grid, Typography} from '@mui/material';
import PropTypes from 'prop-types';
import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = (props) => {
  const [formToggle, setFormToggle] = useState(true);
  const toggle = () => {
    setFormToggle(!formToggle);
  };
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography component="h1" variant="h3">
          {formToggle ? 'Login' : 'Register'}
        </Typography>
      </Grid>
      <Grid item>
        {formToggle ? <LoginForm /> : <RegisterForm toggle={toggle} />}
      </Grid>
      <Grid item>
        <Typography variant="body2" sx={{mt: 2}}>
          {formToggle ? 'First time here?' : 'Already registered?'}
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={toggle}>{formToggle ? 'Register' : 'Login'}</Button>
      </Grid>
    </Grid>
  );
};

Login.propTypes = {};

export default Login;
