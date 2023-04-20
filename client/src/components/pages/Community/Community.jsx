import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Add from './UI/Add';
import Feed from './UI/Feed';
import Rightbar from './UI/Rightbar';
import Sidebar from './UI/Sidebar';
// import { fetchPostsAsync } from '../../../redux/actions/postsActions';
import { fetchUsersAsync } from '../../../redux/actions/usersActions';
import { fetchArticles } from '../../../redux/actions/articlesActions';
import { fetchPhoto } from '../../../redux/actions/photosActions';
import { setMode } from '../../../redux/actions/modeThemeActions';

function Community() {
  const { mode } = useSelector(state => state);
  // const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  const { modelId } = useParams();
  const dispatch = useDispatch();
  const { posts, users } = useSelector(state => state);

  // получаем всех подписчиков сообщества:
  useEffect(() => {
    dispatch(fetchUsersAsync(modelId));
  }, [modelId]);

  // получаем все статьи сообщества
  useEffect(() => {
    dispatch(fetchArticles(modelId));
  }, [modelId]);

  // получаем все фото сообщества
  useEffect(() => {
    dispatch(fetchPhoto(modelId));
  }, [modelId]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary" minHeight="100vh">
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar sx={{ height: '100%' }} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default Community;
