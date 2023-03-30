import {Navigate} from 'react-router-dom';

const Logout = () => {
  localStorage.removeItem('userToken');
  return <Navigate to="/" />;
};

export default Logout;
