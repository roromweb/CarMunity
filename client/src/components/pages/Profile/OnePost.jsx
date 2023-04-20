import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Button,
  CardActionArea,
  CardActions,
  Box,
  CardHeader,
  Avatar,
  IconButton,
  Badge,
  Checkbox,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ForumIcon from '@mui/icons-material/Forum';
import ShowPost from '../Community/UI/ShowPost';

export default function OnePost({ post, isFavorite, setPost }) {
  const addFavoritePost = async () => {
    try {
      await axios.post(`/api/posts/favorite/${post.id}`);
      if (isFavorite) {
        setPost(state => state.filter(el => el.id !== post.id));
      }
    } catch (e) {
      console.log(e);
    }
  };
  // функция добавляет лайк к посту
  const addLikePost = async () => {
    try {
      await axios.post(`/api/posts/like/${post.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card
      sx={{ width: '40%', height: '40vh', margin: '1%', overflow: 'scroll' }}
    >
      <CardHeader
        avatar={<Avatar src={post?.User?.img} aria-label="recipe" />}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={post?.User?.name}
        subheader={new Date(post?.updatedAt).toLocaleString()}
      />
      <CardMedia
        component="img"
        height="200vh"
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
        <IconButton onClick={() => addLikePost(post?.id)} aria-label="like">
          <Badge badgeContent={post?.likesCount} color="primary">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
          </Badge>
        </IconButton>

        {isFavorite && (
          <IconButton
            onClick={() => addFavoritePost(post?.id)}
            aria-label="favorite"
          >
            <Checkbox
              icon={<BookmarkAddIcon />}
              checked={isFavorite}
              checkedIcon={<BookmarkAddIcon sx={{ color: 'red' }} />}
            />
          </IconButton>
        )}
        <ShowPost post={post} />
      </CardActions>
    </Card>
  );
}
