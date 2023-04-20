import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  formControlLabelClasses,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import { addPostAsync } from '../../../../redux/actions/postsActions';

const SytledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: '0.97',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

function Add() {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState(null);
  const [inputs, setInputs] = useState({ title: '', text: '' });
  const { auth } = useSelector((state) => state);
  const { modelId } = useParams();
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Создать пост"
      >
      
        <Button
          sx={{ width: '800px', marginTop: '15px' }}
          variant="outlined"
        >
          Создать пост
        </Button>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={700}
          height={450}
          bgcolor="background.default"
          color="text.primary"
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Создайте пост
          </Typography>
          <UserBox>
            <Avatar
              src={auth?.img}
              sx={{ width: 40, height: 40 }}
            />
            <Typography fontWeight={500} variant="span">
              {auth?.name}
            </Typography>
          </UserBox>
          <Box type="form">
            <TextField
              sx={{ width: '100%' }}
              id="standard-multiline-static"
              multiline
              rows={1}
              placeholder="Введите заголовок..."
              variant="standard"
              onChange={inputHandler}
              name="title"
            />
            <TextField
              sx={{ width: '100%' }}
              id="standard-multiline-static"
              multiline
              rows={6}
              placeholder="Введите текст..."
              variant="standard"
              onChange={inputHandler}
              name="text"
            />
            {/* я здесь */}
            <Stack direction="row" gap={1} mt={2} mb={3}>
              <TextField type="file" fullWidth variant="outlined" onChange={e => setImg(e.target.files[0])} />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                // type="submit"
                onClick={() => {
                  dispatch(addPostAsync(modelId, inputs, img));
                  setOpen(false);
                }}
              >
                Опубликовать
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </SytledModal>
    </>
  );
}

export default Add;
