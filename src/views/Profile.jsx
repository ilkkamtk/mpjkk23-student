import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';

const Profile = () => {
  const [user] = useContext(MediaContext);

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
