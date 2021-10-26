import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

import { RootState } from '..'
import { IVideo } from '../../interfaces/IVideo'

export const videosSlice = createSlice({
  name: 'videos',
  initialState: [] as IVideo[],
  reducers: {
    set: (_, { payload: videos }: PayloadAction<IVideo[]>) => {
      return videos
    },
    add: (state, { payload: video }: PayloadAction<IVideo>) => {
      const newState = [...state, video]
      return newState
    },
  },
})

export const videosSelector = createSelector(
  (state: RootState) => state.videos,
  (videos) => videos
)
