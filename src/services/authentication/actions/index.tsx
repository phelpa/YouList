import { baseService } from '../../../constants/endpoint'
import httpClient from '../../../infra/http/axios-http-client/axios-http-client'
import {
  ISignUp,
  ISignUpResponse,
  ILoginResponse,
  ILogin,
} from '../../../interfaces/IAuthentication'

import authStorage from 'helpers/authStorage'
import history from 'CreateHistory'

export class AuthenticationActions {
  public async signUp(userData: ISignUp): Promise<void> {
    const { user } = await httpClient.post<ISignUpResponse>(
      `${baseService}/add_user`,
      userData
    )
  }

  public async signIn(userData: ILogin): Promise<void> {
    const { user } = await httpClient.post<ILoginResponse>(
      `${baseService}/sign_in`,
      userData
    )
    authStorage.setUser({
      id: user.id,
      accessToken: user.token,
      email: user.email,
    })

    history.push('')
  }

  public async validateToken(accessToken: string): Promise<void> {
    const { user } = await httpClient.post<ISignUpResponse>(
      `${baseService}/validate_token`,
      { accessToken }
    )
    authStorage.setUser({ ...user, accessToken })
  }

  public async logout(): Promise<void> {
    authStorage.clearUser()
    history.push('/login')
  }
}

const authenticationsActions = new AuthenticationActions()
export default authenticationsActions
