import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { fetchVideoById } from '../../utils/hooks/useYouTube';

const useStyles = makeStyles({
  videoDetailsContainer: {
    maxWidth: '60%',
    margin: 'auto',
  },
  root: {
    boxShadow: 'none',
  },
  media: {
    height: 400,
  },
});

// import { fetchVideoById } from
const Video = () => {
  const classes = useStyles();

  const location = useLocation();
  const currentPathName = location.pathname.split('/')[1];
  const [videoInfo, setVideoInfo] = useState();
  useEffect(() => {
    fetchVideoById(currentPathName).then((response) => {
      setVideoInfo(response.items[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <section className={classes.videoDetailsContainer}>
        {videoInfo && (
          <Card className={classes.root}>
            <CardMedia
              component="iframe"
              title="test"
              src={`https://www.youtube.com/embed/${currentPathName}`}
              className={classes.media}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {videoInfo.snippet.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {videoInfo.snippet.description}
              </Typography>
            </CardContent>
          </Card>
        )}
      </section>
      <aside />
    </div>
  );
};

export default Video;
