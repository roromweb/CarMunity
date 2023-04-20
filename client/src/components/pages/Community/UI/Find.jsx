import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../../../../redux/actions/postsActions';

export default function Find() {
  const { modelId } = useParams();
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(modelId, input));
  }, [input, modelId]);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '800px' },
      }}
      noValidate
      autoComplete="off"
      marginTop={5}
    >
      <TextField value={input} onChange={(e) => setInput(e.target.value)} id="standard-basic" label="Поиск..." variant="standard" />
    </Box>
  );
}
