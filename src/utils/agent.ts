import axios from 'axios';

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    return {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...config.headers
      }
    };
  },
  error => {
    return Promise.reject(error);
  }
);

//arrancar o any do retorno
export const get = (url: any, params?: any, headers=null): any =>
  axios({
    method: 'get',
    params,
    headers,
    url
  });

export const post = (url: any, data : any, headers=null): any =>
  axios({
    method: 'post',
    headers,
    url,
    data
  });

export const put = (url: any, data: any, headers=null) =>
  axios({
    method: 'put',
    headers,
    url,
    data
  });

export const del = (url: any, data=null) =>
  axios({
    method: 'delete',
    data,
    url
  });
