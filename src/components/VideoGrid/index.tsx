import React, { useEffect } from 'react'

import usePromise from '@eduzz/houston-hooks/usePromise'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import useApiCall from '../../hooks/apiCall'
import useModal from '../../hooks/useModal'
import videosService from '../../services/videos'
import { videosSelector } from '../../store/slices/videos'
import ActionIcon from '../Shared/ActionIcon'
import CreateVideoModal from './CreateVideoModal'
import Video from './Video'

const VideoGrid = () => {
  const [isOpen, openModal, closeModal] = useModal()
  const videos = useSelector(videosSelector)
  const params = useParams()

  const [loading] = useApiCall(() => videosService.getVideos(params.listId), [])

  return (
    <div className="flex_wrap">
      {loading && <div>Carregando...</div>}
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
      <ActionIcon
        callback={openModal}
        icon="ondemand_video"
        description="Add new video"
      />
      {isOpen && (
        <CreateVideoModal listId={params.listId} closeModal={closeModal} />
      )}
    </div>
  )
}

export default VideoGrid
