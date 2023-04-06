import {Box, Button, Container, TextField} from '@mui/material';
import PropTypes from 'prop-types';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';
import {useAuthentication} from '../hooks/ApiHooks';
import useForm from '../hooks/FormHooks';

const LoginForm = (props) => {
  const {setUser} = useContext(MediaContext);
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
      setUser(loginResult.user);
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
    <Container maxWidth="xs">
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="dense"
          name="username"
          label="Username"
          onChange={handleInputChange}
          value={inputs.username}
        />
        <TextField
          fullWidth
          margin="dense"
          name="password"
          type="password"
          label="Password"
          onChange={handleInputChange}
          value={inputs.password}
        />
        <Button fullWidth sx={{mt: 1}} variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </Container>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
