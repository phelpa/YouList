import React, { createContext, useContext, useState, useCallback } from 'react'

import { baseService } from '../../constants/endpoint'
import httpClient from '../../infra/http/axios-http-client/axios-http-client'
import { IVideo, IVideoResponse } from '../../interfaces/IVideo'

export interface IVideoContext {
  video: IVideo
  isLoading: boolean
  error: any
  getVideo: (list_id: number) => void
}

function Video(): IVideoContext {
  const [video, setVideo] = useState<IVideo>(undefined!)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>(undefined)

  const getVideo = useCallback(async (video_id: number) => {
    setError(undefined)
    setVideo(undefined!)
    setIsLoading(true)

    try {
      const { videos } = await httpClient.get<IVideoResponse>(
        `${baseService}/get_videos`,
        {
          id: video_id
        }
      )
      setVideo(videos[0])
    } catch (e) {
      setError(e)
      setVideo(undefined!)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { video, isLoading, error, getVideo }
}

const VideoContext = createContext<IVideoContext>({} as IVideoContext)

type IProviderProps = {
  children: React.ReactNode
}

const VideoProvider = ({ children }: IProviderProps) => {
  return (
    <VideoContext.Provider value={Video()}>{children}</VideoContext.Provider>
  )
}

export const useVideo = () => useContext(VideoContext)

export default VideoProvider
