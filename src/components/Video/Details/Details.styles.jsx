import styled from 'styled-components';

export const StyleWrapper = styled.div`
  .video-youtube-card {
    box-shadow: none;
  }
  .video-card-description {
    padding: 2rem;
  }
  .card-media {
    height: 220px;
  }
  @media (min-width: 768px) {
    .card-media {
      height: 300px;
    }
  }
  @media (min-width: 992px) {
    .card-media {
      height: 400px;
    }
  }
`;
