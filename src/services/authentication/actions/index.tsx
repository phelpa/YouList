import { baseService } from '../../../constants/endpoint'
import httpClient from '../../../infra/http/axios-http-client/axios-http-client'
import {
  ISignUp,
  ISignUpResponse,
  ISignUpUser,
} from '../../../interfaces/IAuthentication'
import { store } from '../../store'
import { authenticationSlice } from '../slice'

export class AuthenticationActions {
  public async signUp(userData: ISignUp): Promise<void> {
    const { user } = await httpClient.post<ISignUpResponse>(
      `${baseService}/add_user`,
      userData
    )

    store.dispatch(authenticationSlice.actions.set(user))
  }
  public async validateToken(token: string): Promise<ISignUpUser> {
    const { user } = await httpClient.post<ISignUpResponse>(
      `${baseService}/validate_token`,
      { token }
    )
    return user
  }
}

const authenticationsActions = new AuthenticationActions()
export default authenticationsActions
