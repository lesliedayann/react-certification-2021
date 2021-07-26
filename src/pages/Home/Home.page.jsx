import React, { useRef } from 'react';
import VideosContainer from '../../components/VideosContainer'
import './Home.styles.css';

function HomePage() {

  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Welcome to the Challenge!</h1>
      <VideosContainer />
    </section>
  );
}

export default HomePage;
