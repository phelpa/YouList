import React from 'react'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import useApiCall from '../../hooks/apiCall'
import videoActions from '../../redux/video/actions'
import { videoSelector } from '../../redux/video/slice'
import Annotations from './Annotations'
import styles from './styles.module.css'
import VideoPlayer from './VideoPlayer'

const VideoPage = () => {
  const params = useParams()
  const video = useSelector(videoSelector)

  const [loading] = useApiCall(() => videoActions.getVideo(params.videoId), [])

  return (
    <div className={`flex_wrap justify_center ${styles.video_player}`}>
      {loading && <div>Loading...</div>}
      {!loading && (
        <>
          <VideoPlayer youtubeId={video.youtube_id} />
          <Annotations />
        </>
      )}
    </div>
  )
}

export default VideoPage
