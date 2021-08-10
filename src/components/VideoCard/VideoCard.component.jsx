import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { AppContext } from '../../utils/AppContext';

const StyleWrapper = styled.div`
  .card-wrapper {
    max-width: 345px;
    margin: 10px 0;
    height: 370px;
  }
  .card-dark {
    background-color: #424242;
    color: #ffffffb3;
  }
  .card-dark p {
    color: #ffffffb3;
  }
  .card-media {
    height: 140px;
  }
`;

const VideoCard = (props) => {
  const { imageURL, title, description, videoId } = props;
  const { darkMode } = useContext(AppContext);

  return (
    <Link to={`/video/${videoId}`}>
      <StyleWrapper>
        <Card className={`card-wrapper ${darkMode && 'card-dark'}`}>
          <CardMedia className="card-media" image={imageURL} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </StyleWrapper>
    </Link>
  );
};
export default VideoCard;
