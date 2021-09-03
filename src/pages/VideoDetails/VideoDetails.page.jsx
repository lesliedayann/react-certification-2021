import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import RelatedVideo from '../../components/RelatedVideos';
import VideoDetailsCard from '../../components/Video/Details/Details.component';
import { useFetchVideos } from '../../utils/hooks/useYouTube';
import { AppContext } from '../../utils/AppContext.provider';
import { getSavedVideos, addRemoveFavVideo } from '../../utils/apis/favoriteVideos.api';
import { StyleWrapper } from './VideoDetails.styles';

const Video = () => {
  const { state } = useContext(AppContext);
  const { darkMode, search, sessionData, logged } = state;
  const location = useLocation();
  const { id } = useParams();
  const { videoTitle, videoDescription, image } = location.state;
  const [saved, setSaved] = useState(false);

  const videoData = {
    id: {
      kind: 'youtube#video',
      videoId: id,
    },
    snippet: {
      title: videoTitle,
      description: videoDescription,
      thumbnails: {
        high: {
          url: image,
        },
      },
    },
  };
  const handleAddFavVideo = () => {
    const added = addRemoveFavVideo(videoData, sessionData.username);
    setSaved(added);
  };

  useEffect(() => {
    if (state.logged) {
      const { videoExists } = getSavedVideos(id, sessionData.username);
      setSaved(videoExists);
    }
  }, [id, sessionData.username, state.logged]);

  return (
    <StyleWrapper className={darkMode && 'bg-dark'} data-testid="videoDetails-page">
      <div className="page--container">
        <section className="videoDetailsContainer">
          <VideoDetailsCard id={id} title={videoTitle} description={videoDescription}>
            {logged ? (
              <div className="videoFavButton">
                {!saved ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleAddFavVideo}
                    startIcon={<FavoriteIcon />}
                  >
                    Add Favorite
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddFavVideo}
                    startIcon={<RemoveCircleIcon />}
                  >
                    Remove Favorite
                  </Button>
                )}
              </div>
            ) : (
              ''
            )}
          </VideoDetailsCard>
        </section>
        <aside data-testid="relatedVideos">
          <RelatedVideo
            currentVideoId={id}
            videos={useFetchVideos(search)}
            path="video"
          />
        </aside>
      </div>
    </StyleWrapper>
  );
};

export default Video;
