import styled from 'styled-components';

export const StyleWrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
  &.bg-dark{
    background-color: #313030;
    .video-youtube-card {
        background-color: transparent;
        color: #ffffffb3;  
        p{
            color: #ada4a4;
        }  
    }
  }
  .page--container {
    max-width: 100%;
    height: 100%;
    position: relative;
    margin: 0 35px ;
  }
  .videoDetailsContainer {
    max-width: 800px;
    .videoFavButton {
        margin-top: 20px;
    }
  }
  aside {
    max-height: 100vh;
    overflow: hidden scroll;
    position: relative;
  }
  @media (min-width: 768px) {
    .page--container {
      max-width: 100%;
      margin 0 70px;
    }
  }
  @media (min-width: 992px) {
    height: 100%;
    .videoDetailsContainer {
      width: 70%;
    }
    .page--container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  @media (min-width: 1200px) {
    .page--container {
      max-width: 1135px;
      margin: 0 auto;
    }
  }
  @media (min-width: 1300px) {
    .page--container {
      max-width: 1250px;
    }
  }
`;
