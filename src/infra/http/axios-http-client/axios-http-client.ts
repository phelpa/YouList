import axios from 'axios'

import {
  HttpPostParams,
  HttpPostClient,
  HttpGetClient,
} from '../protocols/http'

import history from 'CreateHistory'
import authStorage from 'helpers/authStorage'
export class AxiosHttpClient implements HttpPostClient, HttpGetClient {
  private axios

  constructor() {
    this.axios = axios
    this.config()
  }

  private config(): void {
    this.axios.interceptors.request.use(async (config) => {
      return {
        ...config,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...authStorage.getUser(),
          ...config.headers,
        },
      }
    })

    this.axios.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        console.log(error, 'oia')
        this.handleError(error)
        return Promise.reject(error)
      }
    )
  }

  async post<T>(url: string, body: any, params?: HttpPostParams): Promise<T> {
    let headers

    if (params) {
      headers = params.headers
    }

    const response = await this.axios.post(url, body, { headers })
    return response.data
  }

  async get<T>(url: string, params: Object = {}): Promise<T> {
    const response = await this.axios.get(url, { params })
    return response.data
  }

  private handleError(error: any): Error {
    history.push('/login')
    throw new Error(error.message)
  }
}

const httpClient = new AxiosHttpClient()

export default httpClient
