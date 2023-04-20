import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ForumIcon from '@mui/icons-material/Forum';
import {
  Favorite, FavoriteBorder, MoreVert,
} from '@mui/icons-material';
import {
  Avatar,
  Badge,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Add from './Add';
import ShowPost from './ShowPost';
import { decrementPostCounterLike, incrementPostCounterLike } from '../../../../redux/actions/postsActions';

function Post({ post, addFavoritePost }) {
  // функция добавляет лайк к посту
  const { modelId } = useParams();
  const dispatch = useDispatch();
  const [checkLike, setCheckLike] = useState(false);
  const [checkFavorite, setCheckFavorite] = useState(false);

  console.log('это проверка лайков', post.id, checkLike);

  useEffect(() => {
    axios(`/api/posts/checklike/${post.id}`)
      .then(res => setCheckLike(res.data.status));

    axios(`/api/posts/checkfavorite/${post.id}`)
      .then(res => setCheckFavorite(res.data.status));
  }, [modelId]);

  const addLikePost = async (postId) => {
    try {
      await axios.post(`/api/posts/like/${postId}`);
      if (checkLike) {
        dispatch(decrementPostCounterLike(postId));
      } else {
        dispatch(incrementPostCounterLike(postId));
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Card sx={{ width: '800px', margin: '1%' }}>
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
        <Typography variant="subtitle1" color="text.secondary">
          {post?.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton onClick={() => addLikePost(post?.id)} aria-label="like">
          <Badge badgeContent={post?.likesCount} color="primary">
            <Checkbox
              checked={checkLike}
              onChange={() => setCheckLike(!checkLike)}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
          </Badge>
        </IconButton>

        <IconButton onClick={() => addFavoritePost(post?.id)} aria-label="favorite">
          <Checkbox
            checked={checkFavorite}
            onChange={() => setCheckFavorite(!checkFavorite)}
            icon={<BookmarkAddIcon />}
            checkedIcon={<BookmarkAddIcon sx={{ color: 'red' }} />}
          />
        </IconButton>
        <ShowPost post={post} />
      </CardActions>
    </Card>
  );
}

export default Post;
