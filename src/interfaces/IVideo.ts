export interface IVideo {
  id: number,
  title: string,
  description: string,
  created: string,
  youtube_id: string;
}

export interface ICreateVideo {
  title : string,
  description : string,
  list_id : number,
  youtube_id : string
  user_id: number
}

export interface ICreateVideoResponse {
  data : Array<IVideo>
}
