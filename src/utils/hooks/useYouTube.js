import axios from 'axios';

const API_KEY = 'AIzaSyDE9yryXzFe5HsYFd1uH3FMIOrp6ldrhZM';

export const fetchVideos = (searchValue) => {
  const APIUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=40&q=${searchValue}`;
  const request = axios.get(APIUrl);
  return request
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
    .catch((error) => {
      console.log(error);
    });
};

export const fetchVideoById = (id) => {
  const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${API_KEY}`;
  const request = axios.get(API_URL);
  return request
    .then((response) => {
      if (response.status === 200) {
        console.log(response);
        return response.data;
      }
      if (response.status === 404) {
        throw new Error('Not found');
      }
      if (!response.ok) {
        throw new Error('Sorry, something went wrong');
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
};
