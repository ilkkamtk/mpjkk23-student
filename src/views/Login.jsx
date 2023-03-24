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
    <>
      {formToggle ? <LoginForm /> : <RegisterForm />}
      <p>{formToggle ? 'First time here?' : 'or'}</p>
      <button onClick={toggle}>{formToggle ? 'Register' : 'Login'}</button>
    </>
  );
};

Login.propTypes = {};

export default Login;
