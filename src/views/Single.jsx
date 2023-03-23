import {mediaUrl} from '../utils/variables';

const Single = () => {
  const file = {}; // TODO in the next task: single media from props.location.state

  return (
    <>
      <h1>{file.title}</h1>
      <img src={mediaUrl + file.filename} alt={file.title} />
    </>
  );
};

// TODO in the next task: add propType for location

export default Single;
