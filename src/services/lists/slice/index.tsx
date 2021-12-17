import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

import { IList } from '../../../interfaces/IList'
import { RootState } from '../../store'

export const listsSlice = createSlice({
  name: 'lists',
  initialState: [] as IList[],
  reducers: {
    set: (_, { payload: lists }: PayloadAction<IList[]>) => {
      return lists
    },
    add: (state, { payload: list }: PayloadAction<IList>) => {
      const newState = [...state, list]
      return newState
    },
  },
})

export const listsSelector = createSelector(
  (state: RootState) => state.lists,
  (lists) => lists
)
