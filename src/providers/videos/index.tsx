import React, { useState, createContext, useContext } from 'react'

import { listPath, videosPath } from '../../constants/endpoint'
import httpClient from '../../infra/http/axios-http-client/axios-http-client'
import { IVideo, ICreateVideo, IVideoResponse } from '../../interfaces/IVideo'

export interface IVideosContext {
  videos: IVideo[] | undefined
  isLoading: boolean
  error: any
  getVideos: (list_id: number) => void
  isAdding: boolean
  errorAddVideo: any
  addVideo: (video: ICreateVideo) => void
}

export const VideosHook = (): IVideosContext => {
  const [videos, setVideos] = useState<IVideo[]>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(undefined)

  const getVideos = async (list_id: number) => {
    setError(undefined)
    setVideos(undefined)
    setIsLoading(true)
    try {
      //{{Host}}/api/get_videos?user_id=3
      //http://localhost:9000/list/2/videos
      const { videos } = await httpClient.get<IVideoResponse>(
        `${listPath}/get_videos`,
        {
          list_id
        }
      )
      setVideos(videos)
    } catch (e) {
      setError(e)
      setVideos(undefined!)
    } finally {
      setIsLoading(false)
    }
  }

  const [isAdding, setIsAdding] = useState(false)
  const [errorAddVideo, setErrorAddVideo] = useState(undefined)

  const addVideo = async (video: ICreateVideo) => {
    setErrorAddVideo(undefined)
    setIsAdding(true)
    try {
      const { data } = await httpClient.post(`${videosPath}`, video)
      const newVideos = [...videos!, data] as IVideo[]
      setVideos(newVideos)
    } catch (e) {
      setError(e)
      setVideos(undefined!)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    videos,
    isLoading,
    error,
    getVideos,
    isAdding,
    errorAddVideo,
    addVideo
  }
}

const VideosContext = createContext<IVideosContext>({} as IVideosContext)

type IProviderProps = {
  children: React.ReactNode
}

const VideosProvider = ({ children }: IProviderProps) => {
  return (
    <VideosContext.Provider value={VideosHook()}>
      {children}
    </VideosContext.Provider>
  )
}

export const useVideos = () => useContext(VideosContext)

export default VideosProvider
