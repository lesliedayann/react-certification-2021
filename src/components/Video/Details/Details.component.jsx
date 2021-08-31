import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { StyleWrapper } from './Details.styles';

const VideoDetailsCard = (props) => {
  const { id, title, description, children } = props;
  return (
    <StyleWrapper>
      <Card className="video-youtube-card">
        <CardMedia
          component="iframe"
          title="test"
          src={`https://www.youtube.com/embed/${id}`}
          className="card-media"
        />
        <CardContent className="video-card-description">
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          {children}
        </CardContent>
      </Card>
    </StyleWrapper>
  );
};

export default VideoDetailsCard;
