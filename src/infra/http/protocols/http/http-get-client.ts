export interface HttpGetClient<T = any> {
  get: (url: string, params?: Object) => Promise<T>;
}
