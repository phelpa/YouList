export interface ISignUp {
  name: string
  email: string
  password: string
}

export interface ISignUpUser {
  id: number
  name: string
  email: string
}

export interface ISignUpResponse {
  user: ISignUpUser
}
