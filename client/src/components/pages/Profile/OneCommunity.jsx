import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { WrapText } from '@mui/icons-material';

export default function OneCommunity({ community }) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      <Card
        sx={{
          width: '40vh',
          heigth: '55vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 1,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="220"
            image={community?.Car_model?.img}
            alt="green iguana"
          />
          <CardContent sx={{
            display: "flex",
            // flexDirection: "row",
            flexWrap: 'wrap',
            justifyContent: "center",
            alignContent: "stretch",
            alignItems: "center",
          }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {community?.Car_model?.Car_brand?.name}
              {' '}
              {community?.Car_model?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {community?.Car_model?.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            component={NavLink}
            size="small"
            color="primary"
            to={`/models/${community?.Car_model?.id}`}
          >
            Перейти
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
