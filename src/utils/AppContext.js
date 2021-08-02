import { createContext, useState, useEffect } from 'react';
import { fetchVideos } from './hooks/useYouTube';

const appContextDefaultValue = {
  search: 'wizeline',
  videosData: {},
};
export const AppContext = createContext(appContextDefaultValue);

export function useAppContextValue() {
  const [search, setSearch] = useState(appContextDefaultValue.search);
  const [videosData, setVideosData] = useState(appContextDefaultValue.videosData);
  const handleSearchChange = (value) => {
    setSearch(value);
  };
  const handleVideosDataChange = (data) => {
    setVideosData(data);
  };
  useEffect(() => {
    fetchVideos(search)
      .then((data) => {
        setVideosData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);
  return {
    search,
    setSearch: handleSearchChange,
    videosData,
    setVideosData: handleVideosDataChange,
  };
}
