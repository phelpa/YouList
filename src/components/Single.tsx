import React from 'react';

import Annotations from './Annotations/';
import VideoSingle from './VideoSingle';

const Single = () => (
  <div className="flex flex-wrap justify-center ">
    <VideoSingle />
    <Annotations />
  </div>
);

export default Single;
