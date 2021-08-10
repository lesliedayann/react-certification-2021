import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from '../../../utils/AppContext';

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 100px;
  &.card-dark .video-related-card-title h3 {
    color: #ffffffb3;
  }
  .video-related-card-image {
    width: 120px;
    height: 90px;
    margin-right: 5px;
  }
  .video-related-card-title {
    height: 100%;
    -webkit-box-flex: 1;
    flex-grow: 1;
    padding: 5px;
    box-sizing: border-box;
  }
  .video-related-card-title h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    color: black;
  }
`;

const RelatedVideoCard = (props) => {
  const { darkMode } = useContext(AppContext);
  const { imageURL, title, videoId } = props;
  return (
    <Link to={`/video/${videoId}`}>
      <StyleWrapper className={darkMode && 'card-dark'}>
        <img className="video-related-card-image" src={imageURL} alt={title} />
        <div className="video-related-card-title">
          <h3>{title}</h3>
        </div>
      </StyleWrapper>
    </Link>
  );
};

RelatedVideoCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
};

export default RelatedVideoCard;
