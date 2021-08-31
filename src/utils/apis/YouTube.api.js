import axios from 'axios';

const KEY = 'AIzaSyDE9yryXzFe5HsYFd1uH3FMIOrp6ldrhZM';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    key: KEY,
  },
});
