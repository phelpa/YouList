export interface IAnnotation {
  id: number
  video_id: number
  text: string
  created: Date
  videotime: number
}

export interface IAnnotationGetResponse {
  annotations: IAnnotation[]
}

export interface IAnnotationPostResponse {
  annotation: IAnnotation
}
export interface IAddAnnotation {
  video_id: number
  videotime: number
  text: string
}

export interface IAnnotationForm {
  annotation: string
}
