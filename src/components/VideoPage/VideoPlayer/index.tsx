import React, { memo } from 'react'
import YouTube from 'react-youtube'
import styles from './styles.module.css'

interface IProps {
  youtubeId: string
}

const VideoPlayer = memo(({ youtubeId }: IProps) => {
  const makeYouTubePlayer = (e: any) => {
    window['youtubePlayer'] = e.target
  }

  return (
    <div className={styles.player}>
      <YouTube
        className="w_100 h_100"
        containerClassName="h_100"
        id="videoplayer"
        videoId={youtubeId}
        opts={{}}
        onReady={makeYouTubePlayer}
      />
    </div>
  )
})

export default VideoPlayer
