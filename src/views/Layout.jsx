import {createTheme, ThemeProvider} from '@mui/material';
import {useContext, useEffect} from 'react';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';
import {useUser} from '../hooks/apiHooks';
import {themeOptions} from '../theme/themeOptions';

const Layout = () => {
  const {user, setUser} = useContext(MediaContext);
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const getUserInfo = async () => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      console.log(userToken);
      const userData = await getUserByToken(userToken);
      if (userData) {
        setUser(userData);
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

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/">Login</Link>
              </li>
            )}
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
