import { configureStore } from '@reduxjs/toolkit'

import { videosSlice } from '../videos/slice'
import { listsSlice } from '../lists/slice'

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultRootState extends RootState {}
}

export const store = configureStore({
  reducer: {
    videos: videosSlice.reducer,
    lists: listsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
