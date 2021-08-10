import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RelatedVideo from '../../components/RelatedVideos';
import { useFetchVideoById } from '../../utils/hooks/useYouTube';
import { AppContext } from '../../utils/AppContext';

const StyleWrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
  &.bg-dark{
    background-color: #313030;
  }
  .page--container {
    max-width: 100%;
    height: 100%;
    position: relative;
    margin: 0 35px ;
  }
  .videoDetailsContainer {
    max-width: 800px;
  }
  .card-dark {
    background-color: transparent;
    color: #ffffffb3;
  }
  .card-dark p {
    color: #ada4a4;
  }
  .video-youtube-card {
    box-shadow: none;
  }
  .video-card-description {
    padding: 2rem;
  }
  .card-media {
    height: 220px;
  }
  aside {
    max-height: 100vh;
    overflow: scroll;
    position: relative;
  }
  @media (min-width: 768px) {
    .page--container {
      max-width: 100%;
      margin 0 70px;
    }
    .card-media {
      height: 300px;
    }
  }
  @media (min-width: 992px) {
    height: 100%;
    .videoDetailsContainer {
      width: 70%;
    }
    .page--container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .card-media {
      height: 400px;
    }
  }
  @media (min-width: 1200px) {
    .page--container {
      max-width: 1135px;
      margin: 0 auto;
    }
  }
  @media (min-width: 1300px) {
    .page--container {
      max-width: 1250px;
    }
  }
`;
const Video = () => {
  const { darkMode } = useContext(AppContext);
  const location = useLocation();
  const currentPathName = location.pathname.split('/')[2];

  const { videoDetails } = useFetchVideoById(currentPathName);

  return (
    <StyleWrapper className={darkMode && 'bg-dark'}>
      <div className="page--container">
        <section className="videoDetailsContainer">
          {videoDetails ? (
            <Card className={`video-youtube-card ${darkMode && 'card-dark'}`}>
              <CardMedia
                component="iframe"
                title="test"
                src={`https://www.youtube.com/embed/${currentPathName}`}
                className="card-media"
              />
              <CardContent className="video-card-description">
                <Typography gutterBottom variant="h5" component="h2">
                  {videoDetails.snippet.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {videoDetails.snippet.description}
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <div>Sorry, video not found</div>
          )}
        </section>
        <aside>
          <RelatedVideo currentVideoId={currentPathName} />
        </aside>
      </div>
    </StyleWrapper>
  );
};

export default Video;
