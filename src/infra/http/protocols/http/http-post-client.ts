import { HttpResponse } from './http-response';

export type HttpPostParams = {
  headers?: any;
};
export interface HttpPostClient<R = any> {
  post: (
    url: string,
    body: any,
    params?: HttpPostParams
  ) => Promise<HttpResponse<R>>;
}
