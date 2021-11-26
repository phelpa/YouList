import React, { useEffect } from 'react'

import { loadYoutubeApi } from '../../../helpers/youtube'
import Annotations from './Annotations'
import styles from './styles.module.css'
import VideoPlayer from './VideoPlayer'

const LoginVideoPage = () => {
  useEffect(() => {
    loadYoutubeApi()
  }, [])

  return (
    <div className={`flex_wrap justify_center ${styles.video_player}`}>
      <>
        <VideoPlayer youtubeId={'T_lC2O1oIew'} />
        <Annotations />
      </>
    </div>
  )
}

export default LoginVideoPage
