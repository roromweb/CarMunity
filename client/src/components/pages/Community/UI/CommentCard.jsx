import React from 'react';
import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';
import { Avatar, Card, CardHeader, Checkbox, IconButton, Typography } from '@mui/material';

function CommentCard({ comment }) {
  return (
    <Card sx={{ width: '100%', margin: '1%' }}>
      <CardHeader
        avatar={(
          <Avatar src={comment?.User?.img} aria-label="recipe" />
      )}
        title={comment?.User?.name}
        subheader={new Date(comment?.updatedAt).toLocaleString()}
      />
      <IconButton aria-label="like">
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: 'red' }} />}
        />
      </IconButton>
      <Typography variant="body5" color="text.secondary">
        {comment?.text}
      </Typography>
    </Card>
  );
}

export default CommentCard;
