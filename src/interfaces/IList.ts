export interface IList {
  id: number,
  title: string,
  description: string,
  user_id: number
  urlimage: string,
  created: string,
}

export interface ICreateList {
  title : string,
  description : string,
  user_id : number,
  urlimage : string
}

export interface ICreateListResponse {
  data : Array<IList>
}
