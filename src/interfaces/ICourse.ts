export interface ICourse {
  id: number,
  title: string,
  description: string,
  user_id: number
  urlimage: string,
  created: string,
}

export interface ICreateCourse {
  title : string,
  description : string,
  user_id : number,
  urlimage : string
}

export interface ICreateCourseResponse {
  data : Array<ICourse>
}
