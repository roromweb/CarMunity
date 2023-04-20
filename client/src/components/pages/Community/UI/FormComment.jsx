import { DateRange, Image } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Stack, styled, TextField, Typography, Avatar } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentsAsync } from '../../../../redux/actions/commentsActions';

function FormComment({ post }) {
  const dispatch = useDispatch();
  const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  });
  const user = useSelector((state) => state.auth);
  return (
    <Box
      width="100%"
      height={230}
      bgcolor="background.default"
      color="text.primary"
      p={3}
    >
      <Typography variant="h6" color="white" textAlign="center">
        Комментарии
      </Typography>
      <UserBox>
        <Avatar
          src={user?.img}
          sx={{ width: 30, height: 30 }}
        />
        <Typography fontWeight={500} variant="span">
          {user?.name}
        </Typography>
      </UserBox>
      <Box component="form" onSubmit={(e) => dispatch(addCommentsAsync(e, post?.id, Object.fromEntries(new FormData(e.target))))}>
        <TextField
          sx={{ width: '100%' }}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="Введите свой комметарий..."
          variant="standard"
          name="text"
        />
        {/* я здесь */}
        <Button type="submit">Комментировать</Button>
      </Box>
    </Box>
  );
}

export default FormComment;
