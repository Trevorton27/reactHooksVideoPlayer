import React from 'react';
import Video from '../Video';
import Playlist from '../containers/Playlist';
import StyledWbnPlayer from '../styles/StyledWbnPlayer';

const WbnPlayer = (props) => {
  return (
    <StyledWbnPlayer>
      <Video />
      <Playlist />
    </StyledWbnPlayer>
  );
};

export default WbnPlayer;
