export interface IAnnotation {
  id: number;
  user_id: number;
  video_id: number;
  annotation: string;
  created: Date;
  videotime: number;
}

export interface IAnnotationField {
  annotation: string;
}
export interface IAddAnnotation {
  user_id: number;
  video_id: number;
  videotime: number;
  annotation: string;
}

export interface IAnnotationResponse {
  data: Array<IAnnotation>;
}
