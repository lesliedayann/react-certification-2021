import React, { useLayoutEffect, useContext, useRef } from 'react';
import { random } from '../../utils/fns';
import { AppContext } from '../../utils/AppContext.provider';
import './Layout.styles.css';

function Layout({ children }) {
  const { state } = useContext(AppContext);
  const { darkMode } = state;
  const mainPage = useRef();

  useLayoutEffect(() => {
    const page = mainPage.current;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      page.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }
    const intervalId = setInterval(rotateBackground, 3000);
    page.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      page.removeEventListener('click', rotateBackground);
    };
  }, []);

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
