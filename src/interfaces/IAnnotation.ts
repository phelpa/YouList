export interface IAnnotation {
  id: number
  video_id: number
  text: string
  created: Date
  videotime: number
}

export interface IAnnotationField {
  annotation: string
}
export interface IAddAnnotation {
  video_id: number
  videotime: number
  text: string
}

export interface IAnnotationResponse {
  data: IAnnotation[]
}
