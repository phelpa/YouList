export type HttpPostParams = {
  headers?: any
}
export interface HttpPostClient<T = any> {
  post: (url: string, body: any, params?: HttpPostParams) => Promise<T>
}
