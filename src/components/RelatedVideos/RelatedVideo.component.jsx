import React from 'react';
import { Link } from 'react-router-dom';
import RelatedVideoCard from './Card';

const RelatedVideo = (props) => {
  const { currentVideoId, videos, path } = props;

  const filteredVideos = videos.items.filter(
    (video) => video.id.kind === 'youtube#video' && currentVideoId !== video.id.videoId
  );

  return (
    <div>
      {filteredVideos.map((video) => (
        <Link
          to={{
            pathname: `/${path}/${video.id.videoId}`,
            state: {
              videoTitle: video.snippet.title,
              videoDescription: video.snippet.description,
              image: video.snippet.thumbnails.high.url,
            },
          }}
          key={video.id.videoId}
        >
          <RelatedVideoCard
            imageURL={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
          />
        </Link>
      ))}
    </div>
  );
};

export default RelatedVideo;
