import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import {useLocation} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';

const Single = () => {
  const {state} = useLocation();
  const file = state.file;
  let allData = {
    desc: file.description,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      sepia: 0,
    },
  };
  try {
    allData = JSON.parse(file.description);
  } catch (error) {}

  return (
    <>
      <Typography component="h1" variant="h3">
        {file.title}
      </Typography>
      <Card>
        <CardMedia
          component={'img'}
          src={mediaUrl + file.filename}
          title={file.title}
          style={{
            width: '100%',
            height: 400,
            filter: `
            brightness(${allData.filters.brightness}%)
            contrast(${allData.filters.contrast}%)
            saturate(${allData.filters.saturation}%)
            sepia(${allData.filters.sepia}%)
            `,
          }}
        />
        <CardContent>
          <Typography variant="body1">{allData.desc}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

// TODO in the next task: add propType for location

export default Single;
