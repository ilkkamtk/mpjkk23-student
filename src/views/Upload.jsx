import {Box, Button} from '@mui/material';
import PropTypes from 'prop-types';

const Upload = (props) => {
  return (
    <Box>
      <form>
        <input type="text" name="title" value="title"></input>
        <textarea name="textarea"></textarea>
        <input type="file" name="file" accept="image/* video/* audio/*"></input>
        <Button type="submit">Upload</Button>
      </form>
    </Box>
  );
};

Upload.propTypes = {};

export default Upload;
