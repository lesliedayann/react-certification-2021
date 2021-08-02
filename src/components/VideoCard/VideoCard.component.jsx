import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '10px 0',
  },
  media: {
    height: 140,
  },
});
const VideoCard = (props) => {
  const { imageURL, title, description, videoId } = props;
  const classes = useStyles();

  return (
    <Link to={`/${videoId}`}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={imageURL} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
export default VideoCard;
