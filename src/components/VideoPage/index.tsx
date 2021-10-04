import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import useYoutubeApi from '../../hooks/useYoutubeApi'
import { useVideo } from '../../providers/videosingle'
import Annotations from '../Annotations'

const VideoPage = () => {
  const { video, isLoading, getVideo } = useVideo()
  const params = useParams()
  useYoutubeApi()

  useEffect(() => {
    getVideo(params.videoId)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-wrap justify-center">
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <>
          <div className="vh-50">
            <iframe
              className="w-100 h-100"
              title="iframe"
              id="videoplayer"
              src={
                'https://www.youtube.com/embed/' +
                video?.youtube_id +
                '?enablejsapi=1'
              }
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <Annotations />
        </>
      )}
    </div>
  )
}

export default VideoPage
