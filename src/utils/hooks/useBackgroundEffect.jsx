import { useLayoutEffect } from 'react';
import { random } from '../fns';

const useBackgroundEffect = (mainPage) => {
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
  }, [mainPage]);
};

export default useBackgroundEffect;
