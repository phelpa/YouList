import React, { createContext, useContext, useState, useCallback } from 'react';

import { videoPath } from '../../constants/endpoint';
import { IVideo } from '../../interfaces/IVideo';
import { get } from '../../utils/agent';

export interface IVideoContext {
  video: IVideo[];
  isLoading: boolean;
  error: any;
  getVideo: (list_id: number) => void;
}

function Video(): IVideoContext {
  const [video, setVideo] = useState<IVideo[]>(undefined!);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const getVideo = useCallback(async (video_id: number) => {
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
  }, []);

  return { video, isLoading, error, getVideo };
}

const VideoContext = createContext<IVideoContext>({} as IVideoContext);

type IProviderProps = {
  children: React.ReactNode;
};

const VideoProvider = ({ children }: IProviderProps) => {
  return (
    <VideoContext.Provider value={Video()}>{children}</VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);

export default VideoProvider;
