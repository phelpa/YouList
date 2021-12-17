import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

import { IAnnotation } from '../../../interfaces/IAnnotation'
import { RootState } from '../../store'

export const annotationsSlice = createSlice({
  name: 'annotations',
  initialState: [] as IAnnotation[],
  reducers: {
    set: (_, { payload: annotations }: PayloadAction<IAnnotation[]>) => {
      return annotations
    },
    add: (state, { payload: annotation }: PayloadAction<IAnnotation>) => {
      const newAnnotations = [...state, annotation]
      const sortedAnnotations = newAnnotations.sort(
        (a: IAnnotation, b: IAnnotation) => {
          return a.videotime - b.videotime
        }
      )
      return sortedAnnotations
    },
  },
})

export const annotationsSelector = createSelector(
  (state: RootState) => state.annotations,
  (annotations) => annotations
)
