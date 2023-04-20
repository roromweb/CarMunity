/* eslint-disable import/no-cycle */
import ForumIcon from '@mui/icons-material/Forum';
import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Fab,
  formControlLabelClasses,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Favorite,
  FavoriteBorder,
  Image,
  MoreVert,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import { addPostAsync } from '../../../../redux/actions/postsActions';
import FormComment from './FormComment';
import Comments from './Comments';
import { fetchCommentsAsync } from '../../../../redux/actions/commentsActions';

const SytledModal = styled(Modal)({
  position: 'absolute',
  top: '50%',
  left: '30%',
  overflow: 'scroll',
  height: '100%',
  margin: 'auto',
  opacity: '0.97',
});

function ShowPost({ post }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Badge badgeContent={post?.commentsCount} color="primary">
        <IconButton
          onClick={(e) => setOpen(true)}
          aria-label="comments"
        >
          <ForumIcon color="action" />
        </IconButton>
      </Badge>
      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={{ width: '50%', margin: '1%' }}>
          <CardHeader
            avatar={(
              <Avatar src={post?.User?.img} aria-label="recipe" />
        )}
            action={(
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
        )}
            title={post?.User?.name}
            subheader={new Date(post?.updatedAt).toLocaleString()}
          />
          <CardMedia
            component="img"
            height="500vh"
            image={`${process.env.REACT_APP_BASEURL}/${post?.img}`}
            alt="Post Photo"
          />
          <CardContent>
            <Typography variant="h4" color="text.secondary">
              {post?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post?.text}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="like">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: 'red' }} />}
              />
            </IconButton>
          </CardActions>
          <FormComment post={post} />
          <Comments post={post} />
        </Card>
      </SytledModal>
    </>
  );
}

export default ShowPost;
