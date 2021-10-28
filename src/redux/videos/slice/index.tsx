import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

import { IVideo } from '../../../interfaces/IVideo'
import { RootState } from '../../store'

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
