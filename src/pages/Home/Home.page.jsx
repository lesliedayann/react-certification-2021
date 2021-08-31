import React, { useContext, useRef } from 'react';
import VideosContainer from '../../components/VideosContainer';
import { useFetchVideos } from '../../utils/hooks/useYouTube';
import { AppContext } from '../../utils/AppContext.provider';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);
  const { state } = useContext(AppContext);

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Welcome to the Challenge!</h1>
      <VideosContainer videos={useFetchVideos(state.search)} />
    </section>
  );
}

export default HomePage;
