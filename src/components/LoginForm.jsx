import {Button, Grid, TextField} from '@mui/material';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {useAuthentication} from '../hooks/apiHooks';
import useForm from '../hooks/FormHooks';

const LoginForm = (props) => {
  const {postLogin} = useAuthentication();
  const navigate = useNavigate();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      const loginResult = await postLogin(inputs);
      localStorage.setItem('userToken', loginResult.token);
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doLogin,
    initValues
  );

  return (
    <Grid item xs={6}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="username"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
          value={inputs.username}
          margin="dense"
        />
        <TextField
          fullWidth
          label="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={inputs.password}
          margin="dense"
        />
        <Button
          sx={{mt: 1}}
          fullWidth
          color="primary"
          type="submit"
          variant="outlined"
        >
          Login
        </Button>
      </form>
    </Grid>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
