import { findUsersSessionInfo, getUserData } from './login.api';

export const getSavedVideos = (videoId, username) => {
  const userData = getUserData(username);
  const userVideosFavs = userData[0].savedVideos;
  const videoExists = userVideosFavs.find((video) => video.id.videoId === videoId);
  const videoIndex = userVideosFavs.findIndex((video) => video.id.videoId === videoId);

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
  userData[0].savedVideos = userVideosFavs;
  users[userIndex] = { ...userData[0] };
  localStorage.usersData = JSON.stringify(users);
  return saved;
};
