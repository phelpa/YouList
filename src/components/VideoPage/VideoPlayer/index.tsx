import React, { useEffect } from 'react'

import { loadYoutubeApi } from '../../../helpers/youtube'

interface IProps {
  youtubeId: string
}

const VideoPlayer = ({ youtubeId }: IProps) => {
  useEffect(() => {
    loadYoutubeApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="aldair">
      <iframe
        className="w-100 h-100"
        title="iframe"
        id="videoplayer"
        src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  )
}
export default VideoPlayer
