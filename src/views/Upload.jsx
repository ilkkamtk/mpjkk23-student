import {Box, Button} from '@mui/material';
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';

const Upload = (props) => {
  const initValues = {
    title: '',
    description: '',
    file: '',
  };

  const doUpload = () => {};

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doUpload,
    initValues
  );

  //console.log('Upload', inputs);

  return (
    <Box>
      <form>
        <input
          onChange={handleInputChange}
          type="text"
          name="title"
          value={inputs.title}
        ></input>
        <textarea
          onChange={handleInputChange}
          name="description"
          value={inputs.description}
        ></textarea>
        <input
          onChange={handleInputChange}
          type="file"
          name="file"
          accept="image/* video/* audio/*"
        ></input>
        <Button type="submit">Upload</Button>
      </form>
    </Box>
  );
};

Upload.propTypes = {};

export default Upload;
