interface IUserData {
  accessToken: string
  email: string
  id: number
}

class AuthStorage {
  setUser(userData: IUserData) {
    localStorage.setItem('user_data', JSON.stringify(userData))
  }
  getUser(): Object | null {
    const userDataInString = localStorage.getItem('user_data')

    if (userDataInString) {
      return JSON.parse(userDataInString)
    }

    return null
  }
  getUserId(): number {
    const userDataInString = localStorage.getItem('user_data') as string
    const user = JSON.parse(userDataInString)
    return user.id
  }
  clearUser(): void {
    localStorage.removeItem('user_data')
  }
}

const authStorage = new AuthStorage()

export default authStorage
