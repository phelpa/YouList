export interface ISignUp {
  name: string
  email: string
  password: string
}

export interface ISignUpUser {
  id: number
  name: string
  email: string
  token: string
}

export interface ISignUpResponse {
  user: ISignUpUser
}
export interface ILogin {
  email: string
  password: string
}

export interface ILoginUser {
  id: number
  email: string
  token: string
}
export interface ILoginResponse {
  user: ILoginUser
}

export interface IUpdateAccount {
  token: string
  new_password: string
}

export interface IUpdateAccountForm {
  new_password: string
  confirm_new_password: string
}
