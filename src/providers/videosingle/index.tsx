import React, { createContext, useContext, useState, } from 'react';
import { get } from '../../utils/agent';
import { videoPath } from '../../constants/endpoint';
import { IVideo } from '../../interfaces/IVideo';

export interface IVideoContext {
  video: Array<IVideo>
  isLoading: boolean
  error: any
  getVideo: (list_id: number) => void;
}

function Video(): IVideoContext {
  const [video, setVideo] = useState<Array<IVideo>>(undefined!);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const getVideo = async (video_id: number) => {
    setError(undefined);
    setVideo(undefined!);
    setIsLoading(true);
    try {
      const video = await get(`${videoPath}/${video_id}`);
      setVideo(video);
    } catch (e) {
      setError(e);
      setVideo(undefined!);
    } finally {
      setIsLoading(false);
    }
  };

  return { video, isLoading, error, getVideo };
}

const VideoContext = createContext<IVideoContext>({} as IVideoContext)

type IProviderProps = {
  children: React.ReactNode
};

const VideoProvider = ({children}: IProviderProps) => {
  return (
    <VideoContext.Provider value={Video()}>
        {children}
    </VideoContext.Provider>
  )
}

export const useVideo = () => useContext(VideoContext)

export default VideoProvider;
