export interface IList {
  id: number
  title: string
  description: string
  user_id: number
  youtube_id: string
}

export interface IListGetResponse {
  lists: IList[]
}

export interface IListPostResponse {
  list: IList
}

export interface ICreateList {
  title: string
  description: string
  user_id: number
  youtube_id: string
}

export type IListForm = Omit<ICreateList, 'user_id'>
