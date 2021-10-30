import { baseService } from '../../../constants/endpoint'
import httpClient from '../../../infra/http/axios-http-client/axios-http-client'
import { IVideoGetResponse } from '../../../interfaces/IVideo'
import { store } from '../../store'
import { videoSlice } from '../slice'

export class VideosActions {
  public async getVideo(video_id: number): Promise<void> {
    const { videos } = await httpClient.get<IVideoGetResponse>(
      `${baseService}/get_videos`,
      {
        id: video_id,
      }
    )
    store.dispatch(videoSlice.actions.set(videos[0]))
  }
}

const videosActions = new VideosActions()
export default videosActions
