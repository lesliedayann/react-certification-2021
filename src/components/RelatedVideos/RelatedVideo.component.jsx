import React from 'react';
import { useFetchVideos } from '../../utils/hooks/useYouTube';
import RelatedVideoCard from './Card';

const RelatedVideo = (props) => {
  const { currentVideoId } = props;
  const { videos } = useFetchVideos();
  return (
    <div>
      {videos &&
        videos.map(
          (video) =>
            currentVideoId !== video.id.videoId && (
              <RelatedVideoCard
                imageURL={video.snippet.thumbnails.high.url}
                title={video.snippet.title}
                videoId={video.id.videoId}
                key={video.id.videoId}
              />
            )
        )}
    </div>
  );
};

export default RelatedVideo;
