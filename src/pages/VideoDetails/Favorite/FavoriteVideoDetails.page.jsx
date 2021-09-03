import React, { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RelatedVideo from '../../../components/RelatedVideos';
import VideoDetailsCard from '../../../components/Video/Details';
import { AppContext } from '../../../utils/AppContext.provider';
import { getSavedVideos } from '../../../utils/apis/favoriteVideos.api';
import { StyleWrapper } from '../VideoDetails.styles';

const FavoriteVideoDetails = () => {
  const { state } = useContext(AppContext);
  const { darkMode, sessionData } = state;
  const { userVideosFavs } = getSavedVideos('', sessionData.username);

  const location = useLocation();
  const { id } = useParams();
  const { videoTitle, videoDescription } = location.state;
  return (
    <StyleWrapper className={darkMode && 'bg-dark'} data-testid="favVideoDetails-page">
      <div className="page--container">
        <section className="videoDetailsContainer">
          <VideoDetailsCard id={id} title={videoTitle} description={videoDescription} />
        </section>
        <aside data-testid="favRelatedVideos">
          {userVideosFavs.length > 0 && (
            <RelatedVideo
              currentVideoId={id}
              videos={{ items: userVideosFavs }}
              path="favorite"
            />
          )}
        </aside>
      </div>
    </StyleWrapper>
  );
};

export default FavoriteVideoDetails;
