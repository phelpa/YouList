import React, { useEffect } from 'react';
import Video from '../Video';
import ActionIcon from '../Shared/ActionIcon';
import useModal from '../../hooks/useModal';
import CreateVideoModal from './CreateVideoModal';
import { useVideos } from '../../providers/videos';
import { useParams } from 'react-router-dom';

const VideoGrid = (props: any) => {
  const [isOpen, openModal, closeModal] = useModal();
  const { videos, isLoading, getVideos } = useVideos();
  const params = useParams();

  useEffect(() => {
    getVideos(params.listId);
  }, [getVideos, params.listId]);

  return (
    <div className="w-100 bg-white ">
      <div className="flex flex-wrap">
        {isLoading && <div>Carregando...</div>}
        {videos &&
          videos.map((video, i) => <Video key={i} i={i} video={video} />)}
        <ActionIcon
          callback={() => openModal()}
          icon="ondemand_video"
          description="Adicionar novo vídeo"
        />
        {isOpen && (
          <CreateVideoModal listId={params.listId} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default VideoGrid;
