import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Fab, Tooltip } from '@mui/material';
import { fetchPhoto } from '../../../redux/actions/photosActions';

function PhotoAlbum() {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const { modelId } = useParams();

  useEffect(() => {
    if (photos.length === 0) dispatch(fetchPhoto(modelId));
  }, []);

  return (
    <Box sx={{ width: '100%', height: '100%', overflowY: 'scroll', backgroundColor: 'black' }}>
      {/* <Tooltip
        onClick={(e) => console.log('eee')}
        title="Добавить фото"
      >
        <Fab variant="extended" size="medium" color="white" aria-label="add">
          <AddIcon sx={{ mr: 30 }} />
        </Fab>
      </Tooltip> */}
      <ImageList variant="masonry" cols={3} gap={22}>
        {photos?.map((el) => (
          <ImageListItem key={el.img}>
            <img
              src={`${el?.img}?w=248&fit=crop&auto=format`}
              srcSet={`${el?.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={el?.img}
              loading="lazy"
            />
            <ImageListItemBar sx={{ color: 'white', fontSize: 25 }} position="below" title={el['User.name']} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default PhotoAlbum;
