import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { loadYoutubeApi } from '../../helpers/youtube'
import useApiCall from '../../hooks/apiCall'
import videoActions from '../../services/video/actions'
import { videoSelector } from '../../services/video/slice'
import Annotations from './Annotations'
import styles from './styles.module.css'
import VideoPlayer from './VideoPlayer'

const VideoPage = () => {
  const params = useParams()
  const video = useSelector(videoSelector)

  const [loading] = useApiCall(() => videoActions.getVideo(params.videoId), [])

  useEffect(() => {
    loadYoutubeApi()
  }, [])

  return (
    <div className={`flex_wrap justify_center ${styles.video_player}`}>
      {loading && <div>Loading...</div>}
      {video?.youtube_id && (
        <>
          <VideoPlayer youtubeId={video.youtube_id} />
          <Annotations />
        </>
      )}
    </div>
  )
}

export default VideoPage
