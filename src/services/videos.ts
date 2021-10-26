import { baseService } from '../constants/endpoint'
import httpClient from '../infra/http/axios-http-client/axios-http-client'
import {
  ICreateVideo,
  IVideoGetResponse,
  IVideoPostResponse,
} from '../interfaces/IVideo'
import { store } from '../store'
import { videosSlice } from '../store/slices/videos'

export class VideosService {
  public async getVideos(list_id: number): Promise<void> {
    const { videos } = await httpClient.get<IVideoGetResponse>(
      `${baseService}/get_videos`,
      {
        list_id,
      }
    )
    store.dispatch(videosSlice.actions.set(videos))
  }
  public async addVideo(videoPayload: ICreateVideo): Promise<void> {
    const { video } = await httpClient.post<IVideoPostResponse>(
      `${baseService}/add_video`,
      videoPayload
    )
    store.dispatch(videosSlice.actions.add(video))
  }
}

const videosService = new VideosService()
export default videosService
