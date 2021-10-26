export interface IVideo {
  id: number
  title: string
  description: string
  created: string
  youtube_id: string
  list_id: number
  date: Date
}

export interface IVideoGetResponse {
  videos: IVideo[]
}
export interface IVideoPostResponse {
  video: IVideo
}

export interface ICreateVideo {
  title: string
  description: string
  list_id: number
  youtube_id: string
}

export type IVideoForm = Omit<ICreateVideo, 'list_id'>

export interface ICreateVideoResponse {
  data: IVideo[]
}
