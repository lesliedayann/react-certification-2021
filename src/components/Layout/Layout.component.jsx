import React, { useContext, useRef } from 'react';
import useBackgroundEffect from '../../utils/hooks/useBackgroundEffect';
import { AppContext } from '../../utils/AppContext.provider';
import './Layout.styles.css';

function Layout({ children }) {
  const { state } = useContext(AppContext);
  const { darkMode } = state;
  const mainPage = useRef();
  useBackgroundEffect(mainPage);
  return (
    <main
      className={`container main-page-styled ${
        darkMode ? 'background-dark' : 'background-light'
      }`}
      ref={mainPage}
    >
      {children}
    </main>
  );
}

export default Layout;
