import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useVideo } from '../../providers/videosingle'
import Annotations from './Annotations'
import styles from './styles.module.css'
import VideoPlayer from './VideoPlayer'

const VideoPage = () => {
  const { video, isLoading, getVideo } = useVideo()
  const params = useParams()

  useEffect(() => {
    getVideo(params.videoId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`flex_wrap justify_center ${styles.video_player}`}>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <>
          <VideoPlayer youtubeId={video.youtube_id} />
          <Annotations />
        </>
      )}
    </div>
  )
}

export default VideoPage
