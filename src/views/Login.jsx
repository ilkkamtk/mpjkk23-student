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
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Grid item xs={12}>
        <Typography component="h1" variant="h2" gutterBottom>
          {formToggle ? 'Login' : 'Register'}
        </Typography>
      </Grid>
      {formToggle ? <LoginForm /> : <RegisterForm />}
      <Grid item xs={6}>
        <p>{formToggle ? 'First time here?' : 'Already registered?'}</p>
      </Grid>
      <Grid item xs={6}>
        <Button variant="plain" fullWidth onClick={toggle}>
          {formToggle ? 'Register here' : 'Login here'}
        </Button>
      </Grid>
    </Grid>
  );
};

Login.propTypes = {};

export default Login;
