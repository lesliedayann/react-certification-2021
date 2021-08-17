import { createContext, useState } from 'react';

const appContextDefaultValue = {
  search: 'wizeline',
  setSearch: () => {},
  videosData: {},
  setVideosData: () => {},
  videoDetails: {},
  setVideoDetails: () => {},
  darkMode: false,
  setDarkMode: () => {},
};

export const AppContext = createContext(appContextDefaultValue);

export function useAppContextValue() {
  const [search, setSearch] = useState(appContextDefaultValue.search);
  const [videosData, setVideosData] = useState(appContextDefaultValue.videosData);
  const [videoDetails, setVideoDetails] = useState(appContextDefaultValue.videoDetails);
  const [darkMode, setDarkMode] = useState(appContextDefaultValue.darkMode);

  const handleSearchChange = (value) => {
    setSearch(value);
  };
  const handleVideosDataChange = (data) => {
    setVideosData(data);
  };
  const handleVideoDetailsChange = (data) => {
    setVideoDetails(data);
  };
  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };
  return {
    search,
    setSearch: handleSearchChange,
    videosData,
    setVideosData: handleVideosDataChange,
    videoDetails,
    setVideoDetails: handleVideoDetailsChange,
    darkMode,
    setDarkMode: handleDarkModeChange,
  };
}
