import axios, { AxiosResponse } from 'axios';

import {
  HttpPostParams,
  HttpResponse,
  HttpPostClient,
  HttpGetParams,
  HttpGetClient
} from '../protocols/http';

export class AxiosHttpClient implements HttpPostClient, HttpGetClient {
  async post(
    url: string,
    body: any,
    params?: HttpPostParams
  ): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    let headers;

    if (params) {
      headers = params.headers;
    }

    try {
      axiosResponse = await axios.post(url, body, { headers });
    } catch (error) {
      axiosResponse = error.response;
    }
    return this.adapt(axiosResponse);
  }

  async get(url: string, params?: HttpGetParams): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    let headers;

    if (params) {
      headers = params.headers;
    }

    try {
      axiosResponse = await axios.get(url, { headers });
    } catch (error) {
      axiosResponse = error.response;
    }
    return this.adapt(axiosResponse);
  }

  private adapt(axiosResponse: AxiosResponse): HttpResponse {
    return {
      statusCode: axiosResponse.status,
      data: axiosResponse.data
    };
  }
}
