import { useState } from 'react';
import { listPath, videosPath } from '../../constants/endpoint';
import { IVideo, ICreateVideo } from '../../interfaces/IVideo';
import { HttpGetClient, HttpPostClient } from '../../infra/http/protocols/http';

export interface IVideosContext {
  videos: IVideo[] | undefined;
  isLoading: boolean;
  error: any;
  getVideos: (list_id: number) => void;
  isAdding: boolean;
  errorAddVideo: any;
  addVideo: (video: ICreateVideo) => void;
}

export const VideosHook = (
  httpGetClient: HttpGetClient<IVideo[]>,
  httpPostClient: HttpPostClient<IVideo>,
  url: string
): IVideosContext => {
  const [videos, setVideos] = useState<IVideo[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const getVideos = async (list_id: number) => {
    setError(undefined);
    setVideos(undefined);
    setIsLoading(true);
    try {
      const { data } = await httpGetClient.get(`${listPath}/${list_id}/videos`);
      setVideos(data);
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
      const { data } = await httpPostClient.post(`${videosPath}`, video);
      const newVideos = [...videos!, data] as IVideo[];
      setVideos(newVideos);
    } catch (e) {
      setError(e);
      setVideos(undefined!);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    videos,
    isLoading,
    error,
    getVideos,
    isAdding,
    errorAddVideo,
    addVideo
  };
};
