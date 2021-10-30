import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

import { IVideo } from '../../../interfaces/IVideo'
import { RootState } from '../../store'

export const videoSlice = createSlice({
  name: 'video',
  initialState: {} as IVideo,
  reducers: {
    set: (_, { payload: video }: PayloadAction<IVideo>) => {
      return video
    },
  },
})

export const videoSelector = createSelector(
  (state: RootState) => state.video,
  (video) => video
)
