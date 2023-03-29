import {Button, ImageListItem, ImageListItemBar} from '@mui/material';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';

const MediaRow = ({file}) => {
  return (
    <ImageListItem key={file.file_id}>
      <img src={mediaUrl + file.thumbnails.w160} alt={file.title} />
      <ImageListItemBar
        actionIcon={
          <>
            <Button
              variant="contained"
              component={Link}
              to={'/single'}
              state={{file}}
            >
              View
            </Button>
          </>
        }
        title={file.title}
        subtitle={file.description}
      />
    </ImageListItem>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object.isRequired,
};

export default MediaRow;
