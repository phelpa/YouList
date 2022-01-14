import { configureStore } from '@reduxjs/toolkit'

import { annotationsSlice } from '../annotations/slice'
import { listsSlice } from '../lists/slice'
import { videoSlice } from '../video/slice'
import { videosSlice } from '../videos/slice'
import { authenticationSlice } from '../authentication/slice'

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultRootState extends RootState {}
}

export const store = configureStore({
  reducer: {
    videos: videosSlice.reducer,
    lists: listsSlice.reducer,
    annotations: annotationsSlice.reducer,
    video: videoSlice.reducer,
    authentication: authenticationSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
