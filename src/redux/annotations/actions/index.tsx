import { baseService } from '../../../constants/endpoint'
import httpClient from '../../../infra/http/axios-http-client/axios-http-client'
import {
  IAddAnnotation,
  IAnnotationGetResponse,
  IAnnotationPostResponse,
} from '../../../interfaces/IAnnotation'
import { store } from '../../store'
import { annotationsSlice } from '../slice'

export class AnnotationsActions {
  public async getAnnotations(video_id: number): Promise<void> {
    const { annotations } = await httpClient.get<IAnnotationGetResponse>(
      `${baseService}/get_annotations`,
      {
        video_id,
      }
    )
    store.dispatch(annotationsSlice.actions.set(annotations))
  }

  public async addAnnotation(annotationPayload: IAddAnnotation): Promise<void> {
    const { annotation } = await httpClient.post<IAnnotationPostResponse>(
      `${baseService}/add_annotation`,
      annotationPayload
    )
    store.dispatch(annotationsSlice.actions.add(annotation))
  }
}

const annotationsActions = new AnnotationsActions()
export default annotationsActions
