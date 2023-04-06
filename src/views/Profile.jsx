import {AccountCircle, Badge, ContactMail} from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {useContext, useEffect, useState} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {useTag} from '../hooks/ApiHooks';
import {mediaUrl} from '../utils/variables';

const Profile = () => {
  const {user} = useContext(MediaContext);
  const [avatar, setAvatar] = useState({
    filename: 'https://placekitten.com/320',
  });
  const {getTag} = useTag();

  const fetchAvatar = async () => {
    try {
      if (user) {
        const avatars = await getTag('avatar_' + user.user_id);
        const ava = avatars.pop();
        ava.filename = mediaUrl + ava.filename;
        setAvatar(ava);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchAvatar();
  }, [user]);

  return (
    <Card>
      {user && (
        <CardContent>
          <List>
            <ListItem>
              <ListItemAvatar sx={{width: '100%'}}>
                <Avatar
                  variant="square"
                  src={avatar.filename}
                  imgProps={{
                    alt: `${user.username}'s profile image`,
                  }}
                  sx={{width: '100%', height: '30vh'}}
                />
              </ListItemAvatar>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary={user.username} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ContactMail />
              </ListItemIcon>
              <ListItemText primary={user.email} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Badge />
              </ListItemIcon>
              <ListItemText primary={user.full_name} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Badge />
              </ListItemIcon>
              <ListItemText primary={user.user_id} />
            </ListItem>
          </List>
        </CardContent>
      )}
    </Card>
  );
};

export default Profile;
