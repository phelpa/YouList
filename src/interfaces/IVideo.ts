export interface IVideo {
  id: number
  title: string
  description: string
  created: string
  youtube_id: string
}

export interface IVideoResponse {
  videos: IVideo[]
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
