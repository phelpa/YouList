import React from 'react';
import VideoSingle from './VideoSingle';
import Annotations from './Annotations/';

const Single = () => (
      <div className="flex flex-wrap justify-center ">
        <VideoSingle/>
        <Annotations/>
      </div>
  );

export default Single;
