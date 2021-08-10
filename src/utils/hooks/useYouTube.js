import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../AppContext';

const API_KEY = 'AIzaSyBjZD4mXWevXhflwEgjpDOIqhF5WMFg_3A';

export const useFetchVideos = () => {
  const { search } = useContext(AppContext);
  const [videos, setVideos] = useState();

  useEffect(() => {
    const fetchVideos = async () => {
      const APIUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=40&q=${search}`;
      await axios
        .get(APIUrl)
        .then((response) => {
          if (response.status === 200) {
            return response.data;
          }
          if (response.status === 404) {
            throw new Error('Not found');
          }
          if (!response.ok) {
            throw new Error('Sorry, something went wrong');
          }
        })
        .then((response) => {
          setVideos(response.items);
        })
        .catch((error) => {
          console.log('error', error);
        });
    };

    fetchVideos();
  }, [search]);

  return { videos };
};

export const useFetchVideoById = (videoId) => {
  const [videoDetails, setVideoDetails] = useState();
  useEffect(() => {
    const fetchVideoById = async () => {
      const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`;
      await axios
        .get(API_URL)
        .then((response) => {
          if (response.status === 200) {
            return response.data;
          }
          if (response.status === 404) {
            throw new Error('Not found');
          }
          if (!response.ok) {
            throw new Error('Sorry, something went wrong');
          }
        })
        .then((response) => {
          setVideoDetails(response.items[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchVideoById();
  }, [videoId]);
  return { videoDetails };
};
