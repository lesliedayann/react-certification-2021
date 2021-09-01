import axios from 'axios';

const KEY = 'AIzaSyBjZD4mXWevXhflwEgjpDOIqhF5WMFg_3A';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    key: KEY,
  },
});
