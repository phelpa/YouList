import React from 'react'

import { loadYoutubeApi } from '../../../helpers/youtube'

interface IProps {
  youtubeId: string
}

const VideoPlayer = ({ youtubeId }: IProps) => {
  return (
    <div className="vh-50">
      <iframe
        className="w-100 h-100"
        title="iframe"
        id="videoplayer"
        src={'https://www.youtube.com/embed/' + youtubeId + '?enablejsapi=1'}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      {loadYoutubeApi()}
    </div>
  )
}
export default VideoPlayer
