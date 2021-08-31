import React, { useContext, useRef } from 'react';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VideosContainer from '../../components/VideosContainer';
import { useFetchVideos } from '../../utils/hooks/useYouTube';
import { AppContext } from '../../utils/AppContext.provider';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);
  const { state } = useContext(AppContext);

  const handleClear = () => {
    localStorage.clear();
  };

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Welcome to the Challenge!</h1>
      <Button variant="contained" color="primary" onClick={handleClear}>
        <FavoriteIcon style={{ color: 'white' }} fontSize="small" /> borrar
      </Button>
      <VideosContainer videos={useFetchVideos(state.search)} />
    </section>
  );
}

export default HomePage;
