import React, { useContext } from 'react';
import styled from 'styled-components';
import { getSavedVideos } from '../../../utils/apis/favoriteVideos.api';
import { AppContext } from '../../../utils/AppContext.provider';
import VideosContainer from '../../../components/VideosContainer';

const StyleWrapper = styled.div`
  max-width: 302px;
  margin-left: auto;
  margin-right: auto;
  h1 {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    color: white;
  }
  .no-videos {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    color: white;
    margin-top: 40px;
  }
  @media (min-width: 500px) {
    max-width: 422px;
  }
  @media (min-width: 768px) {
    max-width: 705px;
  }
  @media (min-width: 992px) {
    max-width: 800px;
  }
  @media (min-width: 1200px) {
    max-width: 1135px;
  }
  @media (min-width: 1300px) {
    max-width: 1250px;
  }
`;

const FavoriteVideos = () => {
  const { state } = useContext(AppContext);
  const { userVideosFavs } = getSavedVideos('', state.sessionData.username);

  return (
    <section>
      <StyleWrapper>
        <h1>Hi {state.sessionData.username} your favorite videos page!</h1>
        {userVideosFavs.length > 0 ? (
          <VideosContainer videos={{ items: userVideosFavs }} />
        ) : (
          <div className="no-videos">
            Ops! it seems that you do not have favorite videos yet
          </div>
        )}
      </StyleWrapper>
    </section>
  );
};

export default FavoriteVideos;
