import {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState({});
  const {getUserByToken} = useUser();

  const getUserInfo = async () => {
    const userToken = localStorage.getItem('userToken');
    console.log(userToken);
    const user = await getUserByToken(userToken);
    setUser(user);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Full name: {user.full_name}</p>
      <p>Email: {user.email}</p>
    </>
  );
};

export default Profile;
