import mockedUser from '../authenticate-mock.json';

export const findUsersSessionInfo = () => {
  const saveUser = ((username) => {
    try {
      return username ? JSON.parse(username) : [];
    } catch (error) {
      return [];
    }
  })(localStorage.usersData);
  return saveUser;
};
export const getUserData = (username) => {
  const users = findUsersSessionInfo();
  const userFiltered = users.filter((user) => user.username === username);
  return userFiltered;
};

const createUserSessionInfo = (username) => {
  const users = findUsersSessionInfo();
  const currentUser = getUserData(username);
  if (currentUser.length === 0) {
    const userObject = {
      username,
      savedVideos: [],
    };
    users.push(userObject);
  }
  localStorage.usersData = JSON.stringify(users);
};

export default async function loginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userMatched = mockedUser.find(
        (user) => user.username === username && user.password === password
      );
      if (userMatched) {
        createUserSessionInfo(username);
        return resolve(userMatched);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}
