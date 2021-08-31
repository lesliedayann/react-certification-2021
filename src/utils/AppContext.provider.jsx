import React, { useReducer, createContext } from 'react';

const initialState = {
  search: 'wizeline',
  sessionData: {
    id: '',
    username: '',
  },
  logged: false,
  videos: [],
  darkMode: false,
};
const appReducer = (state, action) => {
  let result;
  switch (action.type) {
    case 'INIT_STATE':
      return { initialState };
    case 'SET_SEARCH_QUERY':
      result = { ...state, search: action.payload };
      return result;
    case 'SET_SESSION':
      result = {
        ...state,
        sessionData: action.payload,
        logged: true,
      };
      return result;
    case 'REMOVE_SESSION':
      result = {
        ...state,
        sessionData: action.payload,
        logged: false,
      };
      return result;
    case 'SET_VIDEOS':
      result = { ...state, videos: action.payload };
      return result;
    case 'SET_THEME':
      result = { ...state, darkMode: action.payload };
      return result;
    default:
      return state;
  }
};
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  function setSearch(search) {
    dispatch({
      type: 'SET_SEARCH_QUERY',
      payload: search,
    });
  }
  function setSessionData(id, username) {
    dispatch({
      type: 'SET_SESSION',
      payload: {
        id,
        username,
      },
    });
  }
  function removeSessionData() {
    dispatch({
      type: 'REMOVE_SESSION',
      payload: {
        id: '',
        username: '',
      },
    });
  }
  function setDarkMode() {
    const prevDarkMode = state.darkMode;
    dispatch({
      type: 'SET_THEME',
      payload: !prevDarkMode,
    });
  }
  return (
    <AppContext.Provider
      value={{
        state,
        setSearch,
        setSessionData,
        removeSessionData,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
