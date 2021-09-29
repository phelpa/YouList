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

  console.log(videos, 'olha o videos')
  const params = useParams()

  useEffect(() => {
    getVideos(params.listId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-100 bg-white ">
      <div className="flex flex-wrap">
        {isLoading && <div>Carregando...</div>}
        {videos &&
          videos.map((video, i) => <Video key={i} i={i} video={video} />)}
        <ActionIcon
          callback={openModal}
          icon="ondemand_video"
          description="Adicionar novo vídeo"
        />
        {isOpen && (
          <CreateVideoModal listId={params.listId} closeModal={closeModal} />
        )}
      </div>
    </div>
  )
}

export default VideoGrid
