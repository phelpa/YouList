import React, { memo } from 'react'

import styles from './styles.module.css'

interface IProps {
  youtubeId: string
}

const VideoPlayer = memo(({ youtubeId }: IProps) => {
  return (
    <div className={styles.player}>
      <iframe
        className="h_100 w_100"
        title="iframe"
        id="videoplayer"
        src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  )
})

export default VideoPlayer
