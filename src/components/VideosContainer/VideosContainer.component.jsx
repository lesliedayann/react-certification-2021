import React from 'react';
import styled from 'styled-components';
import {items as videos} from '../../utils/youtube-videos-mock.json';
import VideoCard from '../VideoCard';

const StyleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    max-width: 302px;
    margin-left:auto;
    margin-right:auto;
    @media(min-width:500px){
        max-width: 422px;
    }
    @media(min-width:768px){
        max-width:705px;
        justify-content: space-between;
    }
    @media(min-width:992px){
        max-width:800px;
    }
    @media(min-width:1200px){
        max-width:1135px;
    }
`;

const VideosContainer = ()=>{
    return(
        <StyleWrapper>
            {
                videos.map((video, key)=>(
                    <VideoCard 
                        imageURL={video.snippet.thumbnails.high.url}
                        title={video.snippet.title}
                        description={video.snippet.description}
                        key={`video-item-${key}`}
                    />
                ))
            }
        </StyleWrapper>
    )
};
export default VideosContainer;