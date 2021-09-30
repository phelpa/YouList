export interface IList {
  id: number
  title: string
  description: string
  user_id: number
  youtube_id: string
}

export interface IListResponse {
  lists: IList[]
}

export interface ICreateList {
  title: string
  description: string
  user_id: number
  youtube_id: string
}
export type IListForm = Omit<ICreateList, 'user_id'>

export interface ICreateListResponse {
  list: ICreateList
}
