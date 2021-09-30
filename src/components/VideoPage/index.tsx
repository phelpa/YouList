import React from 'react'

import Annotations from '../Annotations'
import VideoSingle from '../VideoSingle'

const VideoPage = () => (
  <div className="flex flex-wrap justify-center ">
    <VideoSingle />
    <Annotations />
  </div>
)

export default VideoPage
