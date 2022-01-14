import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

import { ISignUpUser } from '../../../interfaces/IAuthentication'
import { RootState } from '../../store'

export const authenticationSlice = createSlice({
  name: 'authentications',
  initialState: {} as ISignUpUser,
  reducers: {
    set: (_, { payload: user }: PayloadAction<ISignUpUser>) => {
      return user
    },
  },
})

export const authenticationSelector = createSelector(
  (state: RootState) => state.authentication,
  (authentications) => authentications
)
