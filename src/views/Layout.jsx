import {AppBar, Box, Button, Container, Toolbar} from '@mui/material';
import {useEffect} from 'react';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {useUser} from '../hooks/apiHooks';

const Layout = () => {
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const getUserInfo = async () => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      console.log(userToken);
      const user = await getUserByToken(userToken);
      if (user) {
        const target = location.pathname === '/' ? '/home' : location.pathname;
        navigate(target);
        return;
      }
    }
    navigate('/');
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Container fixed>
      <AppBar position="sticky">
        <Toolbar>
          <Box sx={{flexGrow: 1, display: {xs: 'flex'}}}>
            <Button
              sx={{my: 2, color: 'white', display: 'block'}}
              component={Link}
              to="/home"
            >
              Home
            </Button>
            <Button
              sx={{my: 2, color: 'white', display: 'block'}}
              component={Link}
              to="/profile"
            >
              Profile
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
