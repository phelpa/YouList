import React, { createContext, useContext, useState, } from 'react';
import { get, post } from '../../utils/agent';
import { listPath, videosPath } from '../../constants/endpoint';
import { IVideo, ICreateVideo } from '../../interfaces/IVideo';

export interface IVideosContext {
  videos: Array<IVideo>
  isLoading: boolean
  error: any
  getVideos: (list_id: number) => void;
  isAdding: boolean
  errorAddVideo: any
  addVideo: (video: ICreateVideo) => void;
}

function Videos(): IVideosContext {
  const [videos, setVideos] = useState<IVideo[]>(undefined!);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const getVideos = async (list_id: number) => {
    setError(undefined);
    setVideos(undefined!);
    setIsLoading(true);
    try {
      const videos = await get(`${listPath}/${list_id}/videos`);
      setVideos(videos);
    } catch (e) {
      setError(e);
      setVideos(undefined!);
    } finally {
      setIsLoading(false);
    }
  };

  const [isAdding, setIsAdding] = useState(false);
  const [errorAddVideo, setErrorAddVideo] = useState(undefined);

  const addVideo = async (video: ICreateVideo) => {
    setErrorAddVideo(undefined);
    setIsAdding(true);
    try {
      const { data }: any = await post(`${videosPath}`, video);
      setVideos([...videos, data]);
    } catch (e) {
      setError(e);
      setVideos(undefined!);
    } finally {
      setIsLoading(false);
    }
  };

  return { videos, isLoading, error, getVideos, isAdding, errorAddVideo , addVideo };
}

const VideosContext = createContext<IVideosContext>({} as IVideosContext)

type IProviderProps = {
  children: React.ReactNode
};

const VideosProvider = ({children}: IProviderProps) => {
  return (
    <VideosContext.Provider value={Videos()}>
        {children}
    </VideosContext.Provider>
  )
}

export const useVideos = () => useContext(VideosContext)

export default VideosProvider;
