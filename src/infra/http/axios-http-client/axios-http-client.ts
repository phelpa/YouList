import axios from 'axios'

import {
  HttpPostParams,
  HttpPostClient,
  HttpGetClient,
} from '../protocols/http'

export class AxiosHttpClient implements HttpPostClient, HttpGetClient {
  async post<T>(url: string, body: any, params?: HttpPostParams): Promise<T> {
    let headers

    if (params) {
      headers = params.headers
    }

    const response = await axios.post(url, body, { headers })
    return response.data
  }

  async get<T>(url: string, params: Object = {}): Promise<T> {
    const response = await axios.get(url, { params })
    return response.data
  }

  private handleError(error: any): Error {
    throw new Error(error.message)
  }
}

const httpClient = new AxiosHttpClient()
export default httpClient
