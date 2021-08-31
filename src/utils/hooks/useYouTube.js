import { useState, useEffect } from 'react';
import Youtube from '../apis/YouTube.api';

export const useFetchVideos = (search) => {
  const [videos, setVideos] = useState({ items: [] });
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const result = await Youtube.get('/search', {
          params: {
            q: search,
            maxResults: 21,
            type: 'video',
          },
        });
        setVideos(result.data);
      } catch (error) {
        console.error('No videos found', error);
      }
    };
    fetchVideos();
  }, [search]);

  return videos;
};
