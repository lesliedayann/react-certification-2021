import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import VideoCard from '../VideoCard';

const StyleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 302px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 500px) {
    max-width: 422px;
  }
  @media (min-width: 768px) {
    max-width: 705px;
    justify-content: space-between;
  }
  @media (min-width: 992px) {
    max-width: 800px;
  }
  @media (min-width: 1200px) {
    max-width: 1135px;
    display: grid;
    grid-template-columns: auto auto auto;
  }
  @media (min-width: 1300px) {
    max-width: 1250px;
  }
`;

const VideosContainer = (props) => {
  const { videos } = props;

  const filteredVideos = videos.items.filter(
    (video) => video.id.kind === 'youtube#video'
  );
  return (
    <StyleWrapper>
      {filteredVideos.map((video) => (
        <Link
          to={{
            pathname: `/video/${video.id.videoId}`,
            state: {
              videoTitle: video.snippet.title,
              videoDescription: video.snippet.description,
              image: video.snippet.thumbnails.high.url,
            },
          }}
          key={video.id.videoId}
        >
          <VideoCard
            imageURL={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
            description={video.snippet.description}
          />
        </Link>
      ))}
    </StyleWrapper>
  );
};
export default VideosContainer;
