import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import useModal from '../../hooks/useModal'
import { useVideos } from '../../providers/videos'
import ActionIcon from '../Shared/ActionIcon'
import Video from '../Video'
import CreateVideoModal from './CreateVideoModal'

const VideoGrid = () => {
  const [isOpen, openModal, closeModal] = useModal()
  const { videos, isLoading, getVideos } = useVideos()
  const params = useParams()

  useEffect(() => {
    getVideos(params.listId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-100 bg-white ">
      <div className="flex flex-wrap">
        {isLoading && <div>Carregando...</div>}
        {videos?.map(video => (
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
    </div>
  )
}

export default VideoGrid
