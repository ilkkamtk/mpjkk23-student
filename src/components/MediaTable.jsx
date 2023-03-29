import {ImageList} from '@mui/material';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {useMedia} from '../hooks/apiHooks';
import {baseUrl} from '../utils/variables';
import MediaRow from './MediaRow';

const MediaTable = () => {
  const {mediaArray} = useMedia();

  return (
    <ImageList>
      {mediaArray.map((item, index) => {
        return <MediaRow key={index} file={item} />;
      })}
    </ImageList>
  );
};

MediaTable.propTypes = {};

export default MediaTable;
