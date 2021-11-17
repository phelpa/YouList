import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

import { IVideo } from '../../../interfaces/IVideo'
import { RootState } from '../../store'

export const videoSlice = createSlice({
  name: 'video',
  initialState: {
    video: {} as IVideo,
  },
  reducers: {
    set: (state, { payload: video }: PayloadAction<IVideo>) => {
      return { ...state, video }
    },
  },
})

export const videoSelector = createSelector(
  (state: RootState) => state.video.video,
  (video) => video
)
