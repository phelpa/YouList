import { HttpResponse } from './http-response';

export type HttpGetParams = {
  headers?: any;
};

export interface HttpGetClient<R = any> {
  get: (url: string, params?: HttpGetParams) => Promise<HttpResponse<R>>;
}
