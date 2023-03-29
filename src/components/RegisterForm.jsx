import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';
import {useUser} from '../hooks/ApiHooks';
import {Button, Grid, TextField} from '@mui/material';

const RegisterForm = (props) => {
  const {postUser, getCheckUser} = useUser();

  const initValues = {
    username: '',
    password: '',
    email: '',
    full_name: '',
  };

  const doRegister = async () => {
    try {
      const userResult = await postUser(inputs);
      alert(userResult.message);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUsername = async () => {
    const {available} = await getCheckUser(inputs.username);
    available || alert('Username not available');
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doRegister,
    initValues
  );

  return (
    <Grid item xs={6}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="username"
          margin="dense"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
          value={inputs.username}
          onBlur={handleUsername}
        />
        <TextField
          fullWidth
          label="password"
          margin="dense"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={inputs.password}
        />
        <TextField
          fullWidth
          label="email"
          margin="dense"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
          value={inputs.email}
        />
        <TextField
          fullWidth
          label="full name"
          margin="dense"
          name="full_name"
          placeholder="Full name"
          onChange={handleInputChange}
          value={inputs.full_name}
        />
        <Button
          sx={{mt: 1}}
          fullWidth
          color="primary"
          type="submit"
          variant="outlined"
        >
          Register
        </Button>
      </form>
    </Grid>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
