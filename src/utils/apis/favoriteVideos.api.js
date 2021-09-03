import { findUsersSessionInfo, getUserData } from './login.api';

export const getSavedVideos = (videoId, username) => {
  const userData = getUserData(username);
  let userVideosFavs = [];
  let videoExists;
  let videoIndex;

  if (userData[0]) {
    userVideosFavs = userData[0].savedVideos;
    videoExists = userVideosFavs.find((video) => video.id.videoId === videoId);
    videoIndex = userVideosFavs.findIndex((video) => video.id.videoId === videoId);
  }

  return { userVideosFavs, videoExists, videoIndex };
};

export const addRemoveFavVideo = (videoData, username) => {
  const users = findUsersSessionInfo();
  const userData = getUserData(username);
  const { userVideosFavs, videoExists, videoIndex } = getSavedVideos(
    videoData.id.videoId,
    username
  );
  const userIndex = users.findIndex((user) => user.username === username);
  let saved = false;
  if (videoExists) {
    userVideosFavs.splice(videoIndex, 1);
    saved = false;
  } else {
    userVideosFavs.push(videoData);
    saved = true;
  }
  if (userData[0]) {
    userData[0].savedVideos = userVideosFavs;
  }
  users[userIndex] = { ...userData[0] };
  localStorage.usersData = JSON.stringify(users);
  return saved;
};
